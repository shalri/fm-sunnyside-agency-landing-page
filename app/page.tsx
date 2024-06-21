import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Services />
      <Testimonials />
      <Gallery />
      <Footer />
    </>
  );
}
