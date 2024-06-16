import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-bg h-[540px] w-full">
      <h1>We are creatives</h1>
      <div className="relative h-[200px] w-[40px]"></div>
      <Image src="./images/icon-arrow-down.svg" fill alt="Arrow down" />
    </section>
  );
}
