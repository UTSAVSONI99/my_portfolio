import About from "@/components/About";
import Contact from "@/components/Contact";
import Divider from "@/components/Divider";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Project from "@/components/Project";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center">
      <Header />
      <Hero />
      <About />
      <Divider />
      <Experience />
      <Divider />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
