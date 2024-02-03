import { useEffect, useRef } from "react";
import Container from "../../components/Container";

export default function Intro({ text }) {
   const textRef = useRef();

   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  // Trigger your animation logic here
                  console.log("Text block is visible!");
                  // You can add your animation class or logic here
                  textRef.current.classList.add("animate"); // Add your CSS class
               }
            });
         },
         {
            root: null,
            rootMargin: "0px",
            threshold: 0.5, // Adjust the threshold as needed
         }
      );

      if (textRef.current) {
         observer.observe(textRef.current);
      }

      return () => {
         if (textRef.current) {
            observer.unobserve(textRef.current);
         }
      };
   }, [textRef]);
   const result = "stunning";
   const adjectives = ["stunning", "innovative", "user-friendly"];

   return (
      <section className="min-h-screen">
         <Container>
            <h2
               className="text-[3rem] text-center leading-normal"
               ref={textRef}
            >
               Hi! My name is Yahyobek.
               <br /> I love building <span>{result}</span> web
               experiences
            </h2>
         </Container>
      </section>
   );
}
