"use client";

import { useEffect, useState } from "react";
import Container from "../Container";
// @ts-ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-ignore
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { getRandomNumber } from "@/app/utils/utils";

export default function Hero() {
  const [result, setResult] = useState("");
  useEffect(() => {
    let finalResult = `console.log("Welcome to my World!")`;
    for (let i = 0; i < finalResult.length; i++) {
      const time = getRandomNumber(0, 100);
      setTimeout(() => {
        setResult(finalResult.slice(0, i + 1));
      }, i * 100 - time);
    }
  }, []);
  return (
    <Container className="min-h-screen flex items-center">
      <div className="flex h-full items-center pb-[12rem]">
        <h1 className="text-[1rem] md:text-[2rem] lg:text-[2.6rem] xl:text-[3.7rem]">
          <SyntaxHighlighter
            language="javascript"
            style={coldarkDark}
            className="bg-slate-900"
          >
            {result}
          </SyntaxHighlighter>
        </h1>
      </div>
    </Container>
  );
}
