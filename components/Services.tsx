"use client";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Service {
  banner: string;
  heading: string;
  copy: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

const headingAnimation = {
  hidden: { opacity: 0 },
  visible: (index: number) => ({
    opacity: 1,
    transition: {
      delay: 0.3 * index,
      duration: 1,
    },
  }),
};
const copyAnimation = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="flex flex-col scroll-smooth sm:flex-row">
      {services.map((service: Service | undefined, i: number) => (
        <motion.div
          className={cn(
            `${service?.banner} flex min-h-[650px] flex-col justify-end gap-y-7 px-4 py-16 text-center text-ss-dark-desaturated-cyan sm:w-[50%] lg:h-[700px]`,
            i === 1 && "text-ss-dark-blue",
          )}
          key={i}
        >
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={headingAnimation}
            custom={i}
            className="font-fraunces text-[1.7rem] font-bold"
          >
            {service?.heading}
          </motion.h2>
          <motion.p
            initial="hidden"
            variants={copyAnimation}
            whileInView="visible"
            viewport={{
              once: true,
            }}
            className="mx-auto max-w-[340px] leading-relaxed"
          >
            {service?.copy}
          </motion.p>
        </motion.div>
      ))}
    </section>
  );
}
