import Container from "../Container";
import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    image: "project_6.png",
    title: "EduCheck",
    description:
      "This is a start-up project we did as a team with the graduates of Najot ta'lim. We made an extensive use of AntDesign. What was hard about this project was the fact that we had to come up with the design for the most part ourselves since we had no designer.",
    liveLink: "https://eloquent-kataifi-5ef62d.netlify.app/",
    sourceLink: "#",
  },
  {
    image: "project_5.png",
    title: "AudioPholio E-commerce Store",
    description:
      "This was one of the best projects I've ever worked on. I have learned a lot from this because I had to take on the challenge of combining Next.js with Redux, which was new for me.",
    liveLink: "https://ryahyobek-audiophile-ecommerce.vercel.app/",
    sourceLink:
      "https://github.com/YahyobekRahimov/audiophile-ecommerce",
  },
  {
    image: "project_1.png",
    title: "Greenshop",
    description:
      "This is one of the biggest projects that I and our team members are working on. Even though this project is still in the development process, we have learned a lot from this project.",
    liveLink: "https://react-greenshop-with-redux.netlify.app/",
    sourceLink: "https://github.com/YahyobekRahimov/greenshop",
  },
  {
    image: "project_2.png",
    title: "Comfy Store",
    description:
      "It is one of the fully responsive e-commerce projects, integrated with APIs. This project helped me take my Front-end skills to another level.",
    liveLink: "https://ryahyobek-comfy-store-v2.netlify.app/",
    sourceLink: "https://github.com/YahyobekRahimov/comfy-store-V2 ",
  },
];

export default function Projects() {
  return (
    <Container>
      <h2 className="text-3xl lg:text-5xl text-center my-10">
        Projects
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 gap-10">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            liveLink={project.liveLink}
            sourceLink={project.sourceLink}
          />
        ))}
      </div>
      <p className="text-center mt-5 text-2xl">
        I have other smaller projects too, but I didn't find them
        worth sharing
      </p>
    </Container>
  );
}
