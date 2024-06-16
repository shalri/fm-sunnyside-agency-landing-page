import Image from "next/image";
import Header from "../components/Header";
import SandBox from "../components/Sandbox";
import Footer from "../components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </>
  );
}
