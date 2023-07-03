import { projectsData } from "../data/data";
import Project from "./Project";
import Title from "./Title";

const Projects = () => {
  return (
    <section className="wrapper pt-10" id="projects">
      <Title
        title="My Works"
        description="I enjoy turning complex problems into simple, beautiful, and intuitive interface designs. I develop lots of sites with React JS in front-end and back-end with Node JS, Express JS, and MongoDB. Here are some of my projects:"
      />

      <div>
        {projectsData.map((project) => (
          <Project {...project} key={project.id} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
