"use client";

import Image from "next/image";
import { navLinks } from "@/lib/data";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const hamburgerClick = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };
  return (
    <div className="sm:flex sm:items-end sm:justify-between sm:bg-[#3dbeff]">
      {isMobileNavActive && (
        <div className="min-w-screen fade-in fixed inset-0 z-10 min-h-screen bg-black/30 backdrop-blur" />
      )}
      <header className="flex w-full items-center justify-between bg-[#3dbeff] px-6 pt-8 sm:px-10 sm:pt-12">
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
      {/* <nav className="hidrelative mx-6 h-[300px] w-full"> */}
      <nav
        className={cn(
          "relative sm:static",
          isMobileNavActive ? "fade-in z-20" : "",
        )}
      >
        <ul
          className={cn(
            "hidden sm:flex sm:items-center sm:gap-x-12 sm:pr-10",
            isMobileNavActive
              ? "mobile-nav fixed left-6 right-6 top-6 z-20 mt-16 flex flex-col items-center gap-y-8 bg-ss-white px-6 py-10"
              : "",
          )}
        >
          {navLinks.map((link) => (
            <li className="" key={link.url}>
              <a
                href={link.url}
                className={cn(
                  "text-xl text-ss-dark-grayish-blue sm:text-ss-white sm:duration-300 sm:hover:text-ss-white/60",
                  link.page === "Contact"
                    ? "inline-block rounded-l-full rounded-r-full bg-ss-yellow px-8 py-4 font-fraunces text-sm uppercase text-ss-very-dark-desaturated-blue transition-all duration-300 sm:bg-ss-white sm:text-ss-very-dark-desaturated-blue sm:hover:bg-ss-white/20 sm:hover:text-ss-white"
                    : "",
                )}
              >
                {link.page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
