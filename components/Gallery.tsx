"use client";
import { gallery } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";

const galleryAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: (index: number) => ({
    opacity: 1,
    rotateY: 360,
    y: 0,
    transition: {
      delay: 0.5 * index,
      duration: 0.8,
    },
  }),
};

export default function Gallery() {
  return (
    <section className="w-full overflow-hidden">
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {gallery.map((image, i) => (
          <motion.div
            key={i}
            initial="hidden"
            variants={galleryAnimation}
            whileInView="visible"
            viewport={{
              once: true,
            }}
            custom={i}
          >
            <picture className="h-full w-full">
              <source
                srcSet={image.desktopImg.src}
                media="(min-width: 640px)"
              />
              <Image
                src={image.mobileImg}
                alt="Gallery Image"
                width={500}
                height={500}
                className="object-contain sm:object-cover"
              />
            </picture>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
