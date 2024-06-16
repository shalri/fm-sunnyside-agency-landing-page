import { propositions } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Projects() {
  return (
    <section className="flex flex-col items-center justify-center">
      {propositions.map((proposal, i) => (
        <div className="flex flex-col items-center justify-center" key={i}>
          <div className={cn("h-[280px] w-full", `${proposal.banner}`)} />
          <div className="bg-ss-white">
            <h1 className="">{proposal.heading}</h1>
            <p className="text-ss-dark-blue">{proposal.copy}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
