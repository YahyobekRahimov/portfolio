"use client";

import { useEffect, useState } from "react";
import Container from "../Container";
import HamburgerIcon from "./HamburgerIcon";
import Logo from "./Logo";
import styled from "@emotion/styled";

const menu = [
  {
    name: "About",
    path: "#about",
  },
  {
    name: "Projects",
    path: "#projects",
  },
  {
    name: "Contact",
    path: "#contact",
  },
];

const ListItem = styled.li`
  position: relative;
  z-index: 10;
  height: max-content;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in;
    color: black;
  }
  &::after {
    content: "";
    z-index: -1;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
    transform-origin: bottom;
    transform: scale(0);
  }
  &:hover::after {
    transition: all 0.2s ease-in;
    transform: scale(1);
  }
`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const handleHamburgerClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <header className="bg-slate-800 text-white">
      <Container className="py-4 flex items-center">
        <Logo />
        <nav className="flex items-center justify-end lg:justify-center w-full">
          <ul className="hidden lg:flex items-center gap-14 text-2xl">
            {menu.map((link, index) => (
              <ListItem className="" key={index}>
                <a
                  className="px-[0.5rem] py-[0.5rem]"
                  href={link.path}
                >
                  {link.name}
                </a>
              </ListItem>
            ))}
          </ul>
          <HamburgerIcon
            className="lg:hidden"
            onClick={handleHamburgerClick}
          />
          {open && (
            <div
              className={`absolute h-screen translate-x-[100%] w-[50%] z-20 bg-slate-800 duration-200 top-0 lg:hidden right-0 ${
                open ? "translate-x-[0%]" : ""
              }`}
            >
              <ul className="flex flex-col text-[1rem] justify-center items-center h-full md:text-[2.5rem]">
                {menu.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-white text-opacity-50 hover:text-opacity-100 p-2 md:p-5 flex justify-center items-center"
                    >
                      <a
                        onClick={() => setOpen(false)}
                        href={item.path}
                      >
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          {open && (
            <div
              onClick={() => setOpen(false)}
              className="fixed top-0 left-0 w-full h-full z-10 bg-black opacity-45"
            ></div>
          )}
        </nav>
      </Container>
    </header>
  );
}
