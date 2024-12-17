export default function Links() {
    const links = [
      {
        href: "/champions",
        title: "챔피언 목록 보기",
      },
      {
        href: "/rotation",
        title: "금주 로테이션 확인",
      },
      {
        href: "/items",
        title: "아이템 목록 보기",
      },
    ];
  
    return (
      <>
      <div className="flex flex-col items-center gap-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-lg font-semibold hover:text-yellow-300 transition-colors"
          >
            {link.title}
          </a>
        ))}
      </div>
      </>
    );
  }