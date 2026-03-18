import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { Education } from "@/sections/Education";
import { Experience } from "@/sections/Experience";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Footer } from "./layout/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
