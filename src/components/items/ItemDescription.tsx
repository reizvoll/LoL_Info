interface ItemDescriptionProps {
    description: string;
  }
  
  export default function ItemDescription({ description }: ItemDescriptionProps) {
    return (
      <div className="text-center">
        <p className="text-base leading-relaxed">{description}</p>
      </div>
    );
  }