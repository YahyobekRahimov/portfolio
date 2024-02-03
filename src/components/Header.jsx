import { NavLink } from "react-router-dom";
import Container from "./Container";
import Logo from "./Logo";
import styled from "@emotion/styled";

const menu = [
   {
      name: "Home",
      path: "/",
   },
   {
      name: "About",
      path: "/about",
   },
   {
      name: "Projects",
      path: "/projects",
   },
   {
      name: "Contact",
      path: "/contact",
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
   return (
      <header className="bg-slate-800 text-white">
         <Container className="py-4 flex items-center">
            <Logo />
            <nav className="flex items-center justify-center w-full">
               <ul className="flex items-center gap-14 text-2xl">
                  {menu.map((link, index) => (
                     <ListItem className="" key={index}>
                        <NavLink
                           className="px-[0.5rem] py-[0.5rem]"
                           to={link.path}
                        >
                           {link.name}
                        </NavLink>
                     </ListItem>
                  ))}
               </ul>
            </nav>
         </Container>
      </header>
   );
}
