"use client";
import { testimonials } from "@/lib/data";
import Image from "next/image";
import TestimonialCards from "./TestimonialCards";

export default function Testimonials() {
  return (
    <section className="max-w-[1440px] pb-24 pt-16 sm:mx-auto sm:py-[160px]">
      <h2 className="text-center font-fraunces font-bold uppercase tracking-[0.25rem] text-ss-grayish-blue sm:text-xl">
        Client testimonials
      </h2>
      <div className="sm:grid sm:grid-cols-3 sm:content-evenly sm:justify-items-center">
        {testimonials.map((testimony, i) => (
          <TestimonialCards key={i} testimony={testimony} index={i} />
        ))}
      </div>
    </section>
  );
}
