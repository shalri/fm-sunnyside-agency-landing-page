import { services } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Services() {
  return (
    // <section className="sm:grid sm:grid-cols-2">
    <section className="flex">
      {services.map((service, i) => (
        <div
          key={i}
          className={cn(
            `${service?.banner} flex min-h-[600px] flex-col justify-end gap-y-7 px-4 py-16 text-center text-ss-dark-desaturated-cyan sm:w-[50%]`,
            i === 1 && "text-ss-dark-blue",
          )}
        >
          <h2 className="font-fraunces text-[1.7rem] font-bold">
            {service?.heading}
          </h2>
          <p className="mx-auto leading-relaxed sm:max-w-[340px]">
            {service?.copy}
          </p>
        </div>
      ))}
    </section>
  );
}
