import { skillsData } from '../data/data';
import Title from './Title';

const About = () => {
  return (
    <section className="wrapper py-10" id="about">
      <Title
        title="What I Do?"
        description="Always ready to prove myself through my work and responsibility. To
        establish myself as an outstanding performer, Discovering something new
        every single day is one of my favorite parts of being a High-Level
        programmer. Below are my skills"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {skillsData.map((skill) => (
          <article
            className="shadow-[inset_0_0_10px_#000] px-5 py-8 text-center"
            key={skill.id}
          >
            <img className="w-16 mx-auto" src={skill.icon} alt={skill.name} />
            <h5 className="text-white text-xl mt-3 mb-2">{skill.name}</h5>
            <div>
              {skill?.skills.map((item) => (
                <button
                  className="text-[12px] bg-secondary-light rounded text-white px-2 py-1 m-[2px]"
                  key={item}
                >
                  {item}
                </button>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default About;
