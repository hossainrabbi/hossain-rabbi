import SkillItem from "../common/SkillItem";
import Title from "../common/Title";

export default function About() {
  return (
    <section className="wrapper pt-10" id="about">
      <Title
        title="What I Do?"
        description="Always ready to prove myself through my work and responsibility. To
        establish myself as an outstanding performer, Discovering something new
        every single day is one of my favorite parts of being a High-Level
        programmer. Below are my skills:"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {skillsData?.map((skill) => (
          <SkillItem {...skill} key={skill.id} />
        ))}
      </div>
    </section>
  );
}

export const skillsData = [
  {
    id: 1,
    name: "Good Knowledge with:",
    skills: [
      "HTML5",
      "Semantic HTML",
      "CSS3",
      "JavaScript",
      "ReactJS",
      "ReduxJS",
      "Tailwind CSS",
      "BootStrap",
      "React BootStrap",
      "EJS",
    ],
    icon: "/assets/skills/good-knowledge.png",
  },
  {
    id: 2,
    name: "Familiar with:",
    skills: [
      "TypeScript",
      "Styled Components",
      "NodeJS",
      "Express JS",
      "REST API",
      "Mongoose",
      "SASS",
      "Material ui",
    ],
    icon: "/assets/skills/familiar.png",
  },
  {
    id: 3,
    name: "Others (Tools):",
    skills: [
      "VS Code",
      "Git",
      "GitHub",
      "Netlify",
      "Heroku",
      "Render",
      "Firebase",
      "Postman",
      "NPM",
      "Yarn",
    ],
    icon: "/assets/skills/others.png",
  },
];
