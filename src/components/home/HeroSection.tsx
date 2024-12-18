import Links from "./Links";

export default function HeroSection() {
  return (
    <div className="relative w-full">
      <div className="sc-fa238766-0 ebiDYY" data-testid="backdrop-background">
        <video
          data-testid="backdrop-embed-video"
          autoPlay
          muted // autoPlay 정책 문제
          className="w-full h-[calc(100vh-152px)] object-cover" // calc[원하는 높이 - 빼야하는 친구들, 사칙연산 아무거나 가능 ^0^)v]
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
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 text-center">
        <img
          src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/9eb028de391e65072d06e77f06d0955f66b9fa2c-736x316.png?auto=format&fit=fill&q=80&w=736"
          alt="Logo"
          className="w-[50vw] max-w-[200px] sm:w-[30vw] sm:max-w-[175px] md:w-[25vw] md:max-w-[225px] lg:w-[20vw] lg:max-w-[275px] h-auto"
          data-testid="masthead-logo"
        />
        <div className="flex flex-col gap-6">
          <Links />
        </div>
      </div>
    </div>
  );
}
