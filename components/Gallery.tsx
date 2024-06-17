import { gallery } from "@/lib/data";
import Image from "next/image";

export default function Gallery() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-2">
        {/* <div className="flex"> */}
        {gallery.map((image, i) => (
          <div
            // className="relative col-span-2 row-span-1 h-[200px] overflow-hidden"
            // className="relative min-h-[186px] min-w-[50%]"
            // className="relative max-h-[360px] min-h-[180px] min-w-[50%]"
            className="h-full w-full"
            key={i}
          >
            <Image
              src={image.mobileImg}
              alt="Gallery Image"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
