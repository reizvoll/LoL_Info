export default function Links() {
  const links = [
    {
      href: "/champions",
      title: "챔피언 목록 보기",
      shortTitle: "챔피언 목록",
    },
    {
      href: "/items",
      title: "아이템 목록 보기",
      shortTitle: "아이템 목록",
    },
    {
      href: "/rotation",
      title: "이번 주 로테이션 챔피언",
      shortTitle: "로테이션 챔피언", // 화면 작아질 때 보여지는 제목.. 만들어주긔
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
      <p className="text-sm sm:text-base md:text-lg font-semibold text-center">
          <span className="block sm:hidden">Riot Games API를 활용하여</span>
          <span className="block sm:hidden">챔피언과 아이템 정보를 제공합니다.</span>
          <span className="hidden sm:inline">
            Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
          </span>
        </p>

        <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="w-[100px] sm:w-[45%] md:w-[30%] lg:w-[200px] min-w-[100px] h-[50px] flex items-center justify-center text-sm border border-gray-300 rounded-md hover:bg-yellow-200 hover:text-gray-800 transition-colors box-border"
            >
              <span className="hidden sm:inline">{link.title}</span>
              <span className="inline sm:hidden">
                {link.shortTitle || link.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}