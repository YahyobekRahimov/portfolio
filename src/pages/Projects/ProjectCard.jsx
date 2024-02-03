const ProjectCard = ({
   image,
   title,
   description,
   demoLink,
   sourceLink,
}) => {
   return (
      <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg m-4">
         <img
            className="w-full h-48 object-cover"
            src={image}
            alt={title}
         />
         <div className="p-6">
            <h2 className="font-bold text-xl mb-2">{title}</h2>
            <p className="text-gray-700">{description}</p>
            <div className="mt-4">
               <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mr-4"
               >
                  Demo
               </a>
               <a
                  href={sourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:underline"
               >
                  Source Code
               </a>
            </div>
         </div>
      </div>
   );
};

export default ProjectCard;
