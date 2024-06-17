import { services } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Services() {
  return (
    <section className="">
      {services.map((service, i) => (
        <div key={i} className={cn(`${service?.banner}`)}>
          <h1 className="font-fraunces text-xl font-bold">
            {service?.heading}
          </h1>
          <p>{service?.copy}</p>
        </div>
      ))}
    </section>
  );
}
