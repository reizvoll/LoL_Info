import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-around items-center w-full py-1">
        <Link href="/" className="hover:text-yellow-100">
          HOME
        </Link>
        <Link href="/champions" className="hover:text-yellow-100">
          챔피언 목록
        </Link>
        <Link href="/items" className="hover:text-yellow-100">
          아이템 목록
        </Link>
        <Link href="/rotation" className="hover:text-yellow-100">
          챔피언 로테이션
        </Link>
      </nav>
    </header>
  );
}