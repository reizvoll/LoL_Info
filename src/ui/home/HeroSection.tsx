import Links from "./Links";

export default function HeroSection() {
  return (
    <div className="relative w-full">
    <div className="sc-fa238766-0 ebiDYY" data-testid="backdrop-background">
      <video
        data-testid="backdrop-embed-video"
        autoPlay
        muted // autoPlay 정책 문제
        className="w-full h-[calc(100vh-144px)] object-cover" // calc[원하는 높이 - 빼야하는 친구들, 사칙연산 아무거나 가능 ^0^)v]
        loop
        playsInline
      >
        <source
          data-testid="source-video/mp4"
          src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/1f5b2cf01a1cf2afa1ce61febee6e2e900808347.mp4"
          type="video/mp4"
        />
      </video>
    </div>
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-10 text-center">
        <img
          src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/9eb028de391e65072d06e77f06d0955f66b9fa2c-736x316.png?auto=format&fit=fill&q=80&w=736"
          alt="Logo"
          className="w-[30vw] max-w-[120px] sm:w-[25vw] sm:max-w-[150px] md:w-[20vw] md:max-w-[200px] lg:w-[15vw] lg:max-w-[300px] h-auto"
          data-testid="masthead-logo"
        />

        {/* Links */}
        <div className="flex flex-col gap-6">
          <Links />
        </div>
      </div>
      </div>
    )
}