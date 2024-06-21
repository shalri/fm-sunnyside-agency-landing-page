"use client";
import { propositions } from "@/lib/data";
import { Proposal } from "@/lib/types";
import { ProjectCard } from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="overflow-hidden">
      {propositions.map((proposal: Proposal, i: number) => (
        <ProjectCard key={i} proposal={proposal} index={i} />
      ))}
    </section>
  );
}
