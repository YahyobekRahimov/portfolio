import Header from "../../components/Header";
import Hero from "./Hero";
import Intro from "./Intro";

export default function Home() {
   return (
      <>
         <Header />
         <main className="bg-slate-800 min-h-screen text-white">
            <Hero />
            <Intro />
         </main>
      </>
   );
}
