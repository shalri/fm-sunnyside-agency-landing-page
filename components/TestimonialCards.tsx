"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Testimony } from "@/lib/types";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface TestimonialCardProps {
  testimony: Testimony;
  index: number;
}

const avatarAnimation = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 360,
    transition: {
      delay: 0.5,
      duration: 0.6,
    },
  },
};

const clientNameAnimation = {
  hidden: { opacity: 0, scale: 1.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1,
    },
  },
};

export default function TestimonialCards({
  testimony,
  index,
}: TestimonialCardProps) {
  const { ref, hasBeenViewed } = useIntersectionObserver(0.7);
  return (
    <div
      ref={ref}
      className="flex flex-col items-center px-6 pt-16 text-center sm:max-w-[390px] lg:max-w-[420px]"
      key={testimony.client}
    >
      <motion.div
        initial="hidden"
        animate={hasBeenViewed ? "visible" : "hidden"}
        variants={avatarAnimation}
        className="relative h-[70px] w-[70px] overflow-hidden rounded-full"
      >
        <Image
          src={testimony.avatarSrc}
          fill
          alt={`${testimony.client} avatar`}
          className="object-contain"
        />
      </motion.div>
      <p className="py-9 text-lg text-ss-dark-grayish-blue">
        {testimony.testimonial}
      </p>
      <motion.h3
        initial="hidden"
        animate={hasBeenViewed ? "visible" : "hidden"}
        variants={clientNameAnimation}
        className="mb-2 font-fraunces text-xl"
      >
        {testimony.client}
      </motion.h3>
      <h4 className="text-ss-grayish-blue">{testimony.position}</h4>
    </div>
  );
}
