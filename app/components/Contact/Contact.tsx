"use client";

import Container from "../../components/Container";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Container className="mt-40 pb-40">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 200 },
        }}
        className="text-center text-3xl lg:text-5xl mb-20"
      >
        Contact me
      </motion.h2>
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        variants={{
          hidden: {
            opacity: 0,
            x: -200,
          },
          visible: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", delay: 0.5 },
            animationIterationCount: 0,
          },
        }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-2 md:text-[1.5rem] text-[0.8rem] lg:text-[1.6rem]"
      >
        <li>
          Phone Number:{" "}
          <a
            className="underline hover:text-blue-600"
            href="tel:998911228229"
          >
            +998 (91) 122-8229
          </a>
        </li>
        <li>
          Telegram username:{" "}
          <a
            className="underline hover:text-blue-600"
            href="https://t.me/YahyobekRahimov"
          >
            @YahyobekRahimov
          </a>
        </li>
        <li>
          Email:{" "}
          <a
            className="underline hover:text-blue-600"
            href="mail:yahyobek.rahimov.developer@gmail.com"
          >
            yahyobek.rahimov.developer@gmail.com
          </a>
        </li>
      </motion.ul>
    </Container>
  );
}
