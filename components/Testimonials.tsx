import { testimonials } from "@/lib/data";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="max-w-[1440px] pb-24 pt-16 sm:mx-auto sm:py-[160px]">
      <h2 className="text-center font-fraunces font-bold uppercase tracking-[0.25rem] text-ss-grayish-blue sm:text-xl">
        Client testimonials
      </h2>
      <div className="sm:grid sm:grid-cols-3 sm:content-evenly sm:justify-items-center">
        {testimonials.map((testimony) => (
          <div
            className="flex flex-col items-center px-6 pt-16 text-center sm:max-w-[390px] lg:max-w-[420px]"
            key={testimony.client}
          >
            <div className="relative h-[70px] w-[70px] overflow-hidden rounded-full">
              <Image
                src={testimony.avatarSrc}
                fill
                alt={`${testimony.client} avatar`}
                className="object-contain"
              />
            </div>
            <p className="py-9 text-lg text-ss-dark-grayish-blue">
              {testimony.testimonial}
            </p>
            <h3 className="mb-2 font-fraunces text-xl">{testimony.client}</h3>
            <h4 className="text-ss-grayish-blue">{testimony.position}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
