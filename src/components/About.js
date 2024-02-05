import { skillsData } from "../data/data";
import SkillItem from "./SkillItem";
import Title from "./Title";

const About = () => {
  return (
    <section className="wrapper pt-10" id="about">
      <Title
        title="What I Do?"
        description="I enjoy turning complex problems into simple, beautiful, and intuitive interface designs. Always ready to prove myself through my work and responsibility. To
        establish myself as an outstanding performer, Discovering something new
        every single day is one of my favorite parts of being a High-Level
        programmer. Below are my skills:"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {skillsData.map((skill) => (
          <SkillItem {...skill} key={skill.id} />
        ))}
      </div>
    </section>
  );
};

export default About;
