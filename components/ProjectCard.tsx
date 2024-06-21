import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Proposal } from "@/lib/types";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ProjectCardProps {
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
    transition: { delay: 0.3 },
  },
};

const headerAnimation = {
  hidden: { y: "-200%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.6,
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
      delay: 0.9,
    },
  },
};

export function ProjectCard({ proposal, index }: ProjectCardProps) {
  const { ref, hasBeenViewed } = useIntersectionObserver(0.5);

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
