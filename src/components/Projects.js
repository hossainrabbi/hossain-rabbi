import { projectsData } from "../data/data";
import Portfolio from "./Portfolio";
import Title from "./Title";

const Projects = () => {
  return (
    <section className="wrapper pt-10" id="projects">
      <Title title="Projects" description="Here's some recent works of mine" />

      {/* I enjoy turning complex problems into simple, beautiful, and intuitive interface designs. I develop lots of sites with React JS in front-end and back-end with Node JS, Express JS, and MongoDB. Here are some of my projects: */}

      <div className="max-w-[900px] mx-auto">
        {projectsData.map((project, idx) => (
          <Portfolio
            {...project}
            key={project.id}
            hideLine={projectsData?.length === idx + 1}
          />
        ))}
        {/* {projectsData.map((project) => (
          <Project {...project} key={project.id} />
        ))} */}
      </div>
    </section>
  );
};

export default Projects;
