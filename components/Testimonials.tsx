import { testimonials } from "@/lib/data";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="">
      <h2 className="text-ss-grayish-blue">Client testimonials</h2>
      {testimonials.map((testimony) => (
        <div className="" key={testimony.client}>
          <div className="relative h-20 w-20 overflow-hidden rounded-full">
            <Image
              src={testimony.avatarSrc}
              fill
              alt={`${testimony.client} avatar`}
              className="object-contain"
            />
          </div>
          <p className="">{testimony.testimonial}</p>
          <h3 className="font-fraunces">{testimony.client}</h3>
          <h4 className="text-ss-grayish-blue">{testimony.position}</h4>
        </div>
      ))}
    </section>
  );
}
