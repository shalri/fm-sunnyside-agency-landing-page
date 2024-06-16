import { gallery } from "@/lib/data";
import Image from "next/image";

export default function Gallery() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-2 gap-0">
        {/* <div className="flex"> */}
        {gallery.map((image, i) => (
          <div className="relative h-[186px] w-full" key={i}>
            <Image
              src={image.mobileImg}
              alt="Gallery Image"
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
