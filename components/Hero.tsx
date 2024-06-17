import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-bg flex h-[480px] w-full flex-col items-center justify-center gap-y-14">
      <h1 className="text-center font-fraunces text-[2.40rem] font-bold uppercase leading-tight tracking-[0.5rem] text-ss-white">
        We are creatives
      </h1>
      <div className="relative h-[116px] w-[40px] hover:animate-bounce">
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
