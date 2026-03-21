import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import ChatBot from "@/components/ChatBot";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <ChatBot />
    </main>
  );
}