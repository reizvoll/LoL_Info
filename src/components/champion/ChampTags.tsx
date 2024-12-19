interface ChampTagsProps {
    tags: string[];
  }
  
  export default function ChampTags({ tags }: ChampTagsProps) {
    return (
      <div className="flex gap-4">
        <h3 className="text-2xl font-semibold mb-4">역할군</h3>
        {tags.map((tag) => (
          <span key={tag} className="px-4 py-2 bg-gray-800 bg-opacity-70 rounded-md text-white text-lg">
            {tag}
          </span>
        ))}
      </div>
    );
  }