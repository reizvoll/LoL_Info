import { itemParseTooltip } from "@/utils/cleanTooltip";
import { fetchItemList, fetchLatestVersion } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";

export default async function ItemsPage() {
  const { itemDetail } = await fetchItemList();
  const version = await fetchLatestVersion();
  // [1001:{데이터1}, 1011:{데이터2}]

  return (
    <div className="px-4 py-12 w-full mx-auto">
      <h1 className="text-center mb-16 text-2xl font-bold">
        아이템 리스트
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,_163px)] justify-center gap-8">
        {itemDetail.map(([key, value]) => (
          <Link key={key} href={`/items/${key}`} passHref>
            <div className="cursor-pointer text-center bg-gray-800 rounded-lg p-3 flex flex-col items-center justify-between h-[220px] transition-transform transform hover:scale-105">
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${value.image.full}`}
                alt={itemParseTooltip(value.name) || ""}
                width={100}
                height={100}
                className="rounded-md"
              />
              <h3 className="mt-2 mb-1 text-white">{itemParseTooltip(value.name)}</h3>
              <h5 className="text-gray-400 m-0">
                가격 : {value.gold?.base || "X"}
              </h5>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}