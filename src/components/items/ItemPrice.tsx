interface ItemPriceProps {
    base: number;
    sell: number;
  }
  
  export default function ItemPrice({ base, sell }: ItemPriceProps) {
    return (
      <div className="border-t border-gray-500 pt-4">
        <h2 className="text-lg font-semibold mb-2">가격 정보</h2>
        <p>가격: {base}</p>
        <p>판매 가격: {sell}</p>
      </div>
    );
  }