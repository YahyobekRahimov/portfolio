import Intro from "./components/Home/Intro";
import Header from "./components/Header/Header";
import Hero from "./components/Home/Hero";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-slate-800 min-h-screen text-white">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <Intro />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}
