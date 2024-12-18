export default function Footer() {
  return (
<footer className="bg-gray-800 text-white p-4 text-center h-20 flex items-center justify-center">
      <p className="hidden sm:block">
        LoL-Info is not endorsed by Riot Games and does not reflect the views or
        opinions of Riot Games or anyone officially involved in producing or
        managing Riot Games properties. Riot Games and all associated properties
        are trademarks or registered trademarks of Riot Games, Inc.
      </p>
      <p className="block sm:hidden">
        LoL-Info is not affiliated with Riot Games.
      </p>
    </footer>
  );
}