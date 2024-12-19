interface ChampTipsProps {
    tips: string[];
    title: string;
  }
  
  export default function ChampTips({ tips, title }: ChampTipsProps) {
    if (!tips.length) return null;
  
    return (
      <div>
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <ul className="list-disc list-inside space-y-2">
          {tips.map((tip, index) => (
            <li key={index} className="text-gray-300">
              {tip}
            </li>
          ))}
        </ul>
      </div>
    );
  }