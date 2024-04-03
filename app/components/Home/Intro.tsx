"use client";

import { useEffect, useState } from "react";
import Container from "../Container";

export default function Intro() {
  const [wordIndex, setWordIndex] = useState(0);
  const adjectives = ["stunning", "innovative", "user-friendly"];

  setTimeout(() => {
    setWordIndex((prev) => {
      if (prev === adjectives.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  }, 1000);

  return (
    <section className="min-h-screen">
      <Container>
        <div className="text-[2rem] lg:text-[3rem] text-center leading-normal mb-4">
          Hi! My name is Yahyobek.
          <br /> I love building
          <div className="w-[20rem] lg:w-[24rem] h-[2rem] inline-block">
            {adjectives.map((adj, index) => (
              <span
                key={index}
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
        <div className="flex flex-col lg:flex-row">
          <div className="bg-slate-600 p-5 flex flex-col gap-2">
            <h3 className="text-3xl mb-3">Educational background</h3>
            <p className="text-xl">
              I have graduated from high school. Although I do not
              hold a degree in Computer Science or anything else, I
              have graduated from Najot ta{"'"}lim right now, where I
              laid the foundation to my career as a Front-End
              developer.
            </p>
            <p className="text-xl">
              But this is not the end. Through consistent learning and
              immersion in the world of web, I continue to hone my
              Front-end skills
            </p>
          </div>
          <div className="bg-slate-600 p-5 flex flex-col gap-2">
            <h3 className="text-3xl mb-3">Experience</h3>
            <p className="text-xl py-2">
              No, I don{"'"}t have experience working on real
              projects. However, I have managed to put together a team
              of Front-end and Back-end developers. And we, as a team,
              are working on one of our biggest projects to expand our
              knowledge and feel what it is like to work as a team.
            </p>
            <p className="text-xl py-2">
              In our team, I took the responsibility of leading the
              team and handling as important tasks as making major
              decisions about what to use, brainstorming about how to
              handle certain problems.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
