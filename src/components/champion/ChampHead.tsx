interface ChampHeadProps {
    name: string;
    title: string;
    blurb: string;
  }
  
  export default function ChampHead({ name, title, blurb }: ChampHeadProps) {
    return (
      <div className="relative px-6 py-10 md:px-12 md:py-20 text-white">
        <div className="max-w-[45%]">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{name}</h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">{title}</h2>
          <p className="text-lg leading-relaxed text-gray-300 hidden sm:block">{blurb}</p>
        </div>
      </div>
    );
  }