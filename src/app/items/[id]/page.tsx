import { fetchItemList, fetchLatestVersion } from "@/utils/serverApi";
import Image from "next/image";

const IMAGE_BASE_URL = "https://ddragon.leagueoflegends.com/cdn";

function parseTooltip(tooltip: string): string {
  let cleanTooltip = tooltip
  .replace(/<subtitleLeft>.*?<[^>]*>([^<]*)<\/[^>]*>.*?<\/subtitleLeft>/g, "($1)") // 괄호로 감싸기
  .replace(/<\/?[^>]+(>|$)|@[^ ]+/g, "");
  return cleanTooltip.trim();
}

interface ItemDetailPageProps {
  params: {
    id: string;
  };
}

// Metadata 생성
export async function generateMetadata({ params }: ItemDetailPageProps) {
  const { id } = params;
  const { data } = await fetchItemList();

  return {
    title: `${data[id]?.name}`,
    description: `${data[id]?.description}`,
  };
}

// 상세 페이지 컴포넌트
export default async function ItemDetailPage({ params }: ItemDetailPageProps) {
  const version = await fetchLatestVersion();
  const id = params.id;
  const { data } = await fetchItemList();
  // [1001:{데이터1}, 1011:{데이터2}]

  if (!data[id]) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          아이템 정보를 찾을 수 없습니다.
        </h1>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-144px)] p-6">
      <div className="max-w-sm w-full bg-gray-800 rounded-lg shadow-lg p-8 space-y-8">
        {/* 이미지 및 제목 섹션 */}
        <div className="text-center">
          <Image
            src={`${IMAGE_BASE_URL}/${version}/img/item/${data[id]?.image.full}`}
            alt={data[id]?.name}
            width={128}
            height={128}
            className="rounded-md mx-auto"
          />
          <h1 className="mt-4 text-2xl font-bold">
            {parseTooltip(data[id]?.name || "")}
          </h1>
        </div>

        {/* 설명 섹션 */}
        <div className="text-center">
          <p className= "text-base leading-relaxed">
            {parseTooltip(data[id]?.description)}
          </p>
        </div>

        {/* 가격 정보 섹션 */}
        <div className="border-t border-gray-500 pt-4">
          <h2 className="text-lg font-semibold mb-2">가격 정보</h2>
          <p>가격: {data[id]?.gold.base}</p>
          <p>판매 가격: {data[id]?.gold.sell}</p>
        </div>
      </div>
    </div>
  );
}