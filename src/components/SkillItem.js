import React from 'react';

const SkillItem = ({ name, icon, skills }) => {
  return (
    <article className="shadow-[inset_0_0_10px_#000] px-5 py-8 text-center">
      <img className="w-16 mx-auto" src={icon} alt={name} />
      <h5 className="text-white text-xl mt-3 mb-2">{name}</h5>
      <div>
        {skills.map((item) => (
          <button className="skill-btn" key={item}>
            {item}
          </button>
        ))}
      </div>
    </article>
  );
};

export default SkillItem;
