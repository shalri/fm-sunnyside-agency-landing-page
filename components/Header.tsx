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
    <>
      {isMobileNavActive && (
        <div className="min-w-screen fade-in fixed inset-0 z-10 min-h-screen bg-black/30 backdrop-blur" />
      )}
      <header className="flex w-full items-center justify-between bg-[#3dbeff] px-6 pt-8">
        <div className="text-lg font-bold">
          <a href="/" className="relative inline-block h-6 w-[130px]">
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
      <nav className={cn("relative", isMobileNavActive ? "fade-in z-20" : "")}>
        <ul
          className={cn(
            "hidden",
            isMobileNavActive
              ? "mobile-nav fixed left-6 right-6 top-6 z-20 mt-16 flex flex-col items-center gap-y-8 bg-ss-white px-6 py-10"
              : "",
          )}
        >
          {navLinks.map((link) => (
            <li className="" key={link.url}>
              <a href={link.url} className="text-xl text-ss-dark-grayish-blue">
                {link.page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
