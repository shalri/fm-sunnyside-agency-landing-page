"use client";
import { gallery } from "@/lib/data";
import { motion, useAnimate, stagger } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Gallery() {
  const [animatedImages, setAnimatedImages] = useState<number[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imageIndex = parseInt(
              entry.target.getAttribute("data-index") || "0",
              10,
            );
            setAnimatedImages((prev) => [...prev, imageIndex]);
          }
        });
      },
      { threshold: 1 },
    );
    document.querySelectorAll(".gallery-image").forEach((img) => {
      observer.current?.observe(img);
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [animatedImages]);

  return (
    <section className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {gallery.map((image, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5, x: 50 }}
            animate={
              animatedImages.includes(i)
                ? { opacity: 1, scale: 1, x: 0 }
                : { opacity: 0, scale: 0.5, x: 50 }
            }
            transition={{ duration: 0.5 }}
            className="gallery-image"
            data-index={i}
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
