import { fetchItemList, fetchLatestVersion } from "@/utils/serverApi";
import Image from "next/image";

const IMAGE_BASE_URL = "https://ddragon.leagueoflegends.com/cdn";

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
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1
        style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "10px" }}
      >
        {data[id]?.name}
      </h1>
      <Image
        src={`${IMAGE_BASE_URL}/${version}/img/item/${data[id]?.image.full}`}
        alt={data[id]?.name}
        width={128}
        height={128}
        style={{ borderRadius: "8px" }}
      />
      <p style={{ marginTop: "10px", fontSize: "1rem", color: "#555" }}>
        {data[id]?.description}
      </p>

      {data[id]?.plaintext && (
        <p style={{ marginTop: "10px", fontStyle: "italic", color: "#888" }}>
          {data[id]?.plaintext}
        </p>
      )}

      {/* 가격 정보 */}
      <div style={{ marginTop: "20px" }}>
        <h2 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>가격 정보</h2>
        <p>기본 가격: {data[id]?.gold.base}</p>
        <p>총 가격: {data[id]?.gold.total}</p>
        <p>판매 가격: {data[id]?.gold.sell}</p>
      </div>

      {data[id]?.from && (
        <div style={{ marginTop: "20px" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Built From</h2>
          <ul style={{ paddingLeft: "20px" }}>
            {data[id]?.from.map((prevItemId: string) => (
              <li key={prevItemId}>{prevItemId}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}