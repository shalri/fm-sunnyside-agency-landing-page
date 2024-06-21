"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const handleClick = () => {
    const projectSection = document.getElementById("projects");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const headingVariants = {
    initial: { opacity: 0, scale: 300, y: 200 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        when: "beforeChildren",
      },
    },
    flip: {
      rotateY: 360,
      transition: {
        duration: 0.8,
        delay: 2, // delay to ensure it starts after the first animation
      },
    },
  };

  return (
    <section
      id="about"
      className="hero-bg group flex min-h-[95dvh] w-full cursor-pointer flex-col items-center justify-center gap-y-14 overflow-hidden bg-[#3dbeff] sm:h-[600px] sm:justify-start sm:gap-y-24 lg:h-[720px]"
      onClick={handleClick}
    >
      <motion.h1
        initial="initial"
        animate={["visible", "flip"]}
        variants={headingVariants}
        className="text-center font-fraunces text-[2.40rem] font-bold uppercase leading-tight tracking-[0.5rem] text-ss-white sm:mt-[30dvh] sm:text-[4rem]"
      >
        We are creatives
      </motion.h1>
      <motion.div
        className="relative h-[116px] w-[40px] group-hover:animate-pulse"
        initial={{ opacity: 0, y: "-500%", scale: 5 }}
        animate={{ opacity: 1, y: 0, scale: 1, transition: { delay: 2 } }}
      >
        <Image
          src="./images/icon-arrow-down.svg"
          fill
          alt="Arrow down"
          className="object-contain"
        />
      </motion.div>
    </section>
  );
}
