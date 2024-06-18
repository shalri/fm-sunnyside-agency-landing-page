import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-bg group flex h-[480px] w-full flex-col items-center justify-center gap-y-14 bg-[#3dbeff] sm:h-[720px] sm:justify-start sm:gap-y-24">
      <h1 className="text-center font-fraunces text-[2.40rem] font-bold uppercase leading-tight tracking-[0.5rem] text-ss-white sm:mt-[120px] sm:text-[4rem]">
        We are creatives
      </h1>
      <div className="relative h-[116px] w-[40px] group-hover:animate-bounce">
        <Image
          src="./images/icon-arrow-down.svg"
          fill
          alt="Arrow down"
          className="object-contain"
        />
      </div>
      <a href="#" className=""></a>
    </section>
  );
}
