import { gallery } from "@/lib/data";
import Image from "next/image";

export default function Gallery() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {/* <div className="flex"> */}
        {gallery.map((image, i) => (
          <picture className="h-full w-full" key={i}>
            <source srcSet={image.desktopImg.src} media="(min-width: 640px)" />
            <Image
              src={image.mobileImg}
              alt="Gallery Image"
              width={500}
              height={500}
              className="object-contain sm:object-cover"
            />
          </picture>
        ))}
      </div>
    </section>
  );
}
