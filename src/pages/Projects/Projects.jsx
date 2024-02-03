import Container from "/src/components/Container";
import ProjectCard from "./ProjectCard";

const PROJECTS = [
   {
      image: "",
      title: "Greenshop",
      description:
         "This is one of the biggest projects that I and our team members are working on. Although this project is still in the development process, we have learned a lot from this project.",
      liveLink: "[URL]",
      repo: "https://github.com/YahyobekRahimov/[name-of-the-repo]",
   },
];

export default function Projects() {
   return (
      <Container>
         <div className="grid grid-cols-3 gap-10">{"someting"}</div>
      </Container>
   );
}
