import { propositions } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Projects() {
  return (
    // <section className="flex flex-col items-center justify-center">
    <section>
      {propositions.map((proposal, i) => (
        <div
          className="flex flex-col items-center justify-center sm:flex-row"
          key={i}
        >
          <div
            className={cn(
              "h-[280px] w-full sm:h-[600px] sm:w-[50%]",
              `${proposal.banner}`,
              i === 0 && "order-last",
            )}
          />
          <div className="bg-ss-white px-6 py-16 text-center sm:w-[50%] sm:px-0 sm:text-left">
            <div className="mx-auto px-6 sm:max-w-[500px]">
              <h1 className="font-fraunces text-3xl font-bold text-ss-very-dark-desaturated-blue sm:text-[2.5rem] sm:leading-tight">
                {proposal.heading}
              </h1>
              <p className="mb-8 mt-6 text-body text-ss-dark-grayish-blue">
                {proposal.copy}
              </p>
              <div className="group flex cursor-pointer flex-col items-center sm:items-start">
                <div className="z-[5] font-fraunces font-bold uppercase text-ss-very-dark-desaturated-blue sm:pl-2">
                  Learn more
                </div>
                <div
                  className={cn(
                    "-mt-[10px] h-[10px] w-[130px] rounded-full bg-black bg-ss-yellow/30 transition-all duration-300 group-hover:bg-ss-yellow/80",
                    i === 1 &&
                      "bg-ss-soft-red/30 group-hover:bg-ss-soft-red/80",
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
