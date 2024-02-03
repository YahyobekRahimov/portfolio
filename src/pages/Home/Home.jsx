import Header from "../../components/Header";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Hero from "./Hero";
import Intro from "./Intro";

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
