import { propositions } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Projects() {
  return (
    <section className="flex flex-col items-center justify-center">
      {propositions.map((proposal, i) => (
        <div className="flex flex-col items-center justify-center" key={i}>
          <div className={cn("h-[280px] w-full", `${proposal.banner}`)} />
          <div className="bg-ss-white px-6 py-16 text-center">
            <h1 className="font-fraunces text-3xl font-bold text-ss-very-dark-desaturated-blue">
              {proposal.heading}
            </h1>
            <p className="mb-8 mt-6 text-body text-ss-dark-grayish-blue">
              {proposal.copy}
            </p>
            <div className="group flex cursor-pointer flex-col items-center">
              <div className="z-[5] font-fraunces font-bold uppercase text-ss-very-dark-desaturated-blue">
                Learn more
              </div>
              <div
                className={cn(
                  "-mt-2 h-[10px] w-[130px] rounded-full bg-black bg-ss-yellow/30 transition-all duration-300 group-hover:bg-ss-yellow/80",
                  i === 1 && "bg-ss-soft-red/30 group-hover:bg-ss-soft-red/80",
                )}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
