import ItemDescription from "@/components/items/ItemDescription";
import ItemImage from "@/components/items/ItemImage";
import ItemPrice from "@/components/items/ItemPrice";
import { itemParseTooltip } from "@/utils/cleanTooltip";
import { fetchItemList, fetchLatestVersion } from "@/utils/serverApi";

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

  //데이터 없을 경우 정보 없음을 표시
  if (!data[id]) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          아이템 정보를 찾을 수 없습니다.
        </h1>
      </div>
    );
  }

  // 아이템 데이터가 있을 경우 상세 정보 렌더링
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-152px)] p-6">
      <div className="max-w-sm w-full bg-gray-800 rounded-lg shadow-lg p-8 space-y-8">
        {/* 이미지 섹션 */}
        <ItemImage
          version={version}
          imageFull={data[id]?.image.full}
          name={itemParseTooltip(data[id]?.name || "")}
        />
        {/* 설명 섹션 */}
        <ItemDescription
          description={itemParseTooltip(data[id]?.description)}
        />
        {/* 가격 정보 섹션 */}
        <ItemPrice
          base={data[id]?.gold.base}
          sell={data[id]?.gold.sell}
        />
      </div>
    </div>
  );
}