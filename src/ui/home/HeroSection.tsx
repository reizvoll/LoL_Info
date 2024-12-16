export default function HeroSection() {
  return (
    <div className="relative w-full h-full">
      <div className="sc-fa238766-0 ebiDYY" data-testid="backdrop-background">
        <video
          data-testid="backdrop-embed-video"
          autoPlay
          muted // autoPlay 정책 문제
          className="w-full h-full object-cover"
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

      <img
        src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/9eb028de391e65072d06e77f06d0955f66b9fa2c-736x316.png?auto=format&fit=fill&q=80&w=736"
        alt="Logo"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30vw] max-w-[120px] sm:w-[25vw] sm:max-w-[150px] md:w-[20vw] md:max-w-[200px] lg:w-[15vw] lg:max-w-[300px] h-auto"
        data-testid="masthead-logo"
      />
    </div>
  );
}