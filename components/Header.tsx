import Image from "next/image";
import { navLinks } from "@/lib/data";

export default function Header() {
  return (
    <header className="mb-6 flex w-full items-center justify-between bg-[#3dbeff] px-6">
      <div className="text-lg font-bold">
        <a href="/" className="relative inline-block h-6 w-[130px]">
          <Image src="./images/logo.svg" fill alt="Sunnyside logo" />
        </a>
      </div>
      <nav className="flex items-center">
        <ul className="">
          {navLinks.map((link) => (
            <li className="" key={link.url}>
              <a href={link.url} className="">
                {link.page}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="hamburger hamburger--minus"
          type="button"
          aria-label="Menu"
          aria-controls="navigation"
          aria-expanded="true"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </nav>
    </header>
  );
}
