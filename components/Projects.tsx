"use client";
import { useRef, useState, useEffect } from "react";
import { propositions } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion as motion } from "framer-motion";

// Define the types for the proposal and the props of the ProjectProposal component
interface Proposal {
  banner: string;
  heading: string;
  copy: string;
}

interface ProjectProposalProps {
  proposal: Proposal;
  index: number;
}

const bannerAnimation = {
  hidden: { opacity: 0, x: 100, scale: 2, rotate: 188 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotate: 0,
    transition: { delay: 0.5 },
  },
};

const headerAnimation = {
  hidden: { y: "-200%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.9,
    },
  },
};

const learnMoreAnimation = {
  hidden: { y: "300%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="overflow-hidden">
      {propositions.map((proposal: Proposal, i: number) => (
        <ProjectProposal key={i} proposal={proposal} index={i} />
      ))}
    </section>
  );
}

function ProjectProposal({ proposal, index }: ProjectProposalProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasBeenViewed, setHasBeenViewed] = useState(false);

  useEffect(() => {
    const currentElement = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenViewed) {
          setHasBeenViewed(true);
        }
      },
      { threshold: 0.5 }, // Adjust this value to fine-tune the trigger point (0.5 means 50% of the element is visible)
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [hasBeenViewed]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center justify-center sm:flex-row"
    >
      <motion.div
        initial="hidden"
        animate={hasBeenViewed ? "visible" : "hidden"}
        variants={bannerAnimation}
        className={cn(
          "h-[280px] w-full sm:h-[600px] sm:w-[50%]",
          `${proposal.banner}`,
          index === 0 && "sm:order-last",
        )}
      />
      <div className="bg-ss-white px-6 py-16 text-center sm:w-[50%] sm:px-0 sm:text-left">
        <div className="mx-auto px-6 sm:max-w-[500px]">
          <motion.h1
            initial="hidden"
            animate={hasBeenViewed ? "visible" : "hidden"}
            variants={headerAnimation}
            className="font-fraunces text-3xl font-bold text-ss-very-dark-desaturated-blue sm:text-[2.5rem] sm:leading-tight"
          >
            {proposal.heading}
          </motion.h1>
          <p className="mb-8 mt-6 text-body text-ss-dark-grayish-blue">
            {proposal.copy}
          </p>
          <motion.div
            initial="hidden"
            animate={hasBeenViewed ? "visible" : "hidden"}
            variants={learnMoreAnimation}
            className="group flex cursor-pointer flex-col items-center sm:items-start"
          >
            <div className="z-[5] font-fraunces font-bold uppercase text-ss-very-dark-desaturated-blue sm:pl-2">
              Learn more
            </div>
            <div
              className={cn(
                "-mt-[10px] h-[10px] w-[130px] rounded-full bg-black bg-ss-yellow/30 transition-all duration-300 group-hover:bg-ss-yellow/80",
                index === 1 &&
                  "bg-ss-soft-red/30 group-hover:bg-ss-soft-red/80",
              )}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
