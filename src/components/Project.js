import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Project = ({
  image,
  name,
  description,
  technologies,
  liveLink,
  gitHubLink,
}) => {
  return (
    <article className="grid lg:grid-cols-2 place-items-center lg:gap-6 shadow-[0_2px_5px_#000] hover:shadow-md lg:shadow-none text-white my-10">
      <div className="w-full h-64 sm:h-80 overflow-hidden relative">
        <img
          className="w-full h-auto transition-all duration-[1s] absolute z-0 top-0 hover:-top-full"
          src={image}
          alt={name}
        />
      </div>
      <div className="p-8 lg:p-0">
        <h4 className="text-2xl">{name}</h4>
        <p className="text-sm my-3">{description}</p>
        <h5 className="text-md mb-1">Technology Used:</h5>
        <div>
          {technologies.map((technology) => (
            <button className="skill-btn" key={technology}>
              {technology}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2.5 mt-5">
          <a
            className="text-xl hover:text-secondary-light"
            href={liveLink}
            target="_blank"
            rel="noreferrer"
          >
            <FaExternalLinkAlt />
          </a>
          <a
            className="text-xl hover:text-secondary-light"
            href={gitHubLink}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </article>
  );
};

export default Project;
