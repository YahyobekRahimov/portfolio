const ProjectCard = ({
  image,
  title,
  description,
  liveLink,
  sourceLink,
  key,
}: {
  image: string;
  title: string;
  description: string;
  liveLink: string;
  sourceLink: string;
  key: number | string;
}) => {
  return (
    <div
      key={key}
      className="bg-slate-900 rounded-xl flex flex-col overflow-hidden shadow-lg"
    >
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt={title}
      />
      <div className="p-6 h-full flex flex-col justify-between gap-0">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-300 mb-2">{description}</p>
        <div>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mr-4"
          >
            View Project
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
