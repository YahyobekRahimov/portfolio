import { useEffect, useRef, useState } from "react";
import Container from "../../components/Container";

export default function Intro({ text }) {
   const [wordIndex, setWordIndex] = useState(0);
   const adjectives = ["stunning", "innovative", "user-friendly"];

   useEffect(() => {
      const intervalId = setInterval(() => {
         setWordIndex((prev) => {
            if (prev === adjectives.length - 1) {
               return 0;
            } else {
               return prev + 1;
            }
         });
      }, 2000);

      return () => clearInterval(intervalId);
   }, []);
   return (
      <section className="min-h-screen">
         <Container>
            <div className="text-[3rem] text-center leading-normal">
               Hi! My name is Yahyobek.
               <br /> I love building
               <div className="w-[24rem] h-[2rem] inline-block">
                  {adjectives.map((adj, index) => (
                     <span
                        className={`text-zinc-200 font-bold
                           ${index !== wordIndex ? "hidden" : ""}
                        `}
                     >
                        {adj}
                     </span>
                  ))}
               </div>
               web experiences
            </div>
         </Container>
      </section>
   );
}
