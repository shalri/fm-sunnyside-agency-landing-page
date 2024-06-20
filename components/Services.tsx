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
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
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
    // <section className="sm:grid sm:grid-cols-2">
    <section id="services" className="flex flex-col scroll-smooth sm:flex-row">
      {services.map((service: Service | undefined, i: number) =>
        service ? <ServiceCard key={i} service={service} index={i} /> : null,
      )}
    </section>
  );
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasBeenViewed, setHasBeenViewed] = useState(false);

  useEffect(() => {
    const currentElement = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenViewed) {
          setHasBeenViewed(true);
        }
      },
      { threshold: 1 },
    );
    if (currentElement) {
      observer.observe(currentElement);
    }
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [hasBeenViewed]);

  return (
    <motion.div
      className={cn(
        `${service?.banner} flex min-h-[650px] flex-col justify-end gap-y-7 px-4 py-16 text-center text-ss-dark-desaturated-cyan sm:w-[50%] lg:h-[700px]`,
        index === 1 && "text-ss-dark-blue",
      )}
    >
      <motion.h2
        initial="hidden"
        animate={hasBeenViewed ? "visible" : "hidden"}
        variants={headingAnimation}
        className="font-fraunces text-[1.7rem] font-bold"
        ref={ref}
      >
        {service?.heading}
      </motion.h2>
      <motion.p
        initial="hidden"
        animate={hasBeenViewed ? "visible" : "hidden"}
        variants={copyAnimation}
        className="mx-auto max-w-[340px] leading-relaxed"
      >
        {service?.copy}
      </motion.p>
    </motion.div>
  );
}
