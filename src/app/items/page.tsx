import { fetchItemList, fetchLatestVersion } from '@/utils/serverApi';
import Image from 'next/image';
import Link from 'next/link';

export default async function ItemsPage() {
  const {itemDetail} = await fetchItemList();
  const version = await fetchLatestVersion();
  // [1001:{데이터1}, 1011:{데이터2}]

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {itemDetail.map(([key, value]) => (
        <Link key={key} href={`/items/${key}`} passHref >
          <div style={{cursor: 'pointer' }}>
          <Image
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${value.image.full}`}
              alt={value.name}
              width={64}
              height={64}
            />
            <h2 className="mt-2 text-center text-sm font-medium">{value.name}</h2>
          </div>  
        </Link>
      ))}
    </div>
  );
}