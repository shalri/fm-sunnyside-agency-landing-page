"use client";

import Image from "next/image";
import { navLinks } from "@/lib/data";
import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const hamburgerClick = () => {
    setIsMobileNavActive((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutsideNav = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsMobileNavActive(false);
      }
    };
    const updateBodyClass = () => {
      if (isMobileNavActive) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    };

    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();

    document.addEventListener("click", handleClickOutsideNav);
    updateBodyClass();

    return () => {
      window.removeEventListener("resize", checkScreenSize);
      document.removeEventListener("click", handleClickOutsideNav);
      document.body.classList.remove("no-scroll");
    };
  }, [isMobileNavActive]);

  const animateNavWrapper = (children: ReactNode) => (
    <AnimatePresence>
      {isMobileNavActive && (
        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0 }}
          className="mobile-nav fixed left-6 right-6 top-6 z-20 mt-16"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );

  const navContent = (
    <ul
      className={cn(
        "hidden sm:flex sm:items-center sm:gap-x-12 sm:pr-10",
        isMobileNavActive &&
          " flex flex-col items-center gap-y-8 bg-ss-white px-6 py-10",
      )}
    >
      {navLinks.map((link) => (
        <li className="" key={link.url}>
          <a
            href={link.url}
            className={cn(
              "transtion-all text-xl text-ss-dark-grayish-blue duration-300 hover:text-ss-very-dark-desaturated-blue sm:text-ss-white sm:duration-300 sm:hover:text-ss-white/60",
              link.page === "Contact"
                ? "inline-block rounded-l-full rounded-r-full bg-ss-yellow px-8 py-4 font-fraunces text-sm uppercase text-ss-very-dark-desaturated-blue transition-all duration-300 hover:bg-ss-yellow/70 sm:bg-ss-white sm:text-ss-very-dark-desaturated-blue sm:hover:bg-ss-white/20 sm:hover:text-ss-white"
                : "",
            )}
          >
            {link.page}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="sm:flex sm:items-end sm:justify-between sm:bg-[#3dbeff]">
      <AnimatePresence>
        {isMobileNavActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-w-screen fixed inset-0 z-10 min-h-screen bg-black/30 backdrop-blur"
          />
        )}
      </AnimatePresence>
      <header
        ref={navRef}
        className="flex w-full items-center justify-between bg-[#3dbeff] px-6 pt-8 sm:px-10 sm:pt-12"
      >
        <div className="sm:mb-2">
          <a
            href="/"
            className="relative inline-block h-6 w-[130px] sm:h-8 sm:w-[172px]"
          >
            <Image src="./images/logo.svg" fill alt="Sunnyside logo" />
          </a>
        </div>
        <button
          className={cn(
            "hamburger hamburger--minus fixed right-5 top-8 z-10 sm:hidden",
            isMobileNavActive ? "is-active" : "",
          )}
          type="button"
          aria-label="Menu"
          aria-controls="navigation"
          aria-expanded={isMobileNavActive}
          onClick={hamburgerClick}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </header>
      <nav
        className={cn("relative sm:static", isMobileNavActive ? "z-20" : "")}
      >
        {isSmallScreen ? animateNavWrapper(navContent) : navContent}
      </nav>
    </div>
  );
}
