export default function Links() {
  const links = [
    {
      href: "/champions",
      imageSrc:
        "https://wallpapers.com/images/featured/league-of-legends-3ggpjbfly8o9uo8a.jpg",
      title: "챔피언 목록 보기",
    },
    {
      href: "/rotation",
      imageSrc:
        "https://wallpapers.com/images/high/3d-league-of-legends-8yx3ab1xb69nn227.webp",
      title: "금주 로테이션 확인",
    },
    {
      href: "/items",
      imageSrc:
        "https://wallpapers.com/images/high/arcane-league-of-legends-dark-alley-z81hrap8o7mezc0g.webp",
      title: "아이템 목록 보기",
    },
  ];

  return (
    <main className="container mx-auto mt-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold">리그 오브 레전드 정보 앱</h1>
        <p className="mt-4 text-gray-500">
          Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
        </p>
      </div>

      <div className="mt-10 flex flex-col justify-center gap-10">
        {links.map((link, index) => (
          <a
            key={index}
            className="flex flex-col justify-center items-center gap-5 text-amber-400"
            href={link.href}
          >
            <div className="relative w-[400px] h-[300px]">
              <img
                src={link.imageSrc}
                alt={link.title}
                className="absolute w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            {link.title}
          </a>
        ))}
      </div>
    </main>
  );
}