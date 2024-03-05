import Container from "/src/components/Container";
import ProjectCard from "./ProjectCard";
import ProjectImage_1 from "/src/assets/images/project_1.png";
import ProjectImage_2 from "/src/assets/images/project_2.png";
import ProjectImage_3 from "/src/assets/images/project_3.png";
import ProjectImage_5 from "/src/assets/images/project_5.png";

const PROJECTS = [
   {
      image: ProjectImage_5,
      title: "AudioPholio E-commerce Store",
      description:
         "This was one of the best projects I've ever worked on. I have learned a lot from this because I had to take on the challenge of combining Next.js with Redux, which was new for me.",
      liveLink: "https://ryahyobek-audiophile-ecommerce.vercel.app/",
      sourceLink:
         "https://github.com/YahyobekRahimov/audiophile-ecommerce",
   },
   {
      image: ProjectImage_1,
      title: "Greenshop",
      description:
         "This is one of the biggest projects that I and our team members are working on. Even though this project is still in the development process, we have learned a lot from this project.",
      liveLink: "https://react-greenshop-with-redux.netlify.app/",
      sourceLink: "https://github.com/YahyobekRahimov/greenshop",
   },
   {
      image: ProjectImage_2,
      title: "Comfy Store",
      description:
         "It is one of the fully responsive e-commerce projects, integrated with APIs. This project helped me take my Front-end skills to another level.",
      liveLink: "https://ryahyobek-comfy-store-v2.netlify.app/",
      sourceLink:
         "https://github.com/YahyobekRahimov/comfy-store-V2 ",
   },
   {
      image: ProjectImage_3,
      title: "Movie Search App",
      description:
         "I have worked on this project before I learned ReactJS. That is why it was done using JavaScript only and the manipulation of DOM was my sole focus",
      liveLink: "https://ryahyobek-movie-search.netlify.app/",
      sourceLink: "https://github.com/YahyobekRahimov/movie-search",
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
                  categories={project.categories}
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
