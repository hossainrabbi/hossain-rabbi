type Props = {
  name: string;
  icon: string;
  skills: string[];
};

export default function SkillItem({ name, icon, skills }: Props) {
  return (
    <article className="shadow-[inset_0_0_10px_#0000001c] dark:shadow-[inset_0_0_10px_#000] px-4 py-5 text-center rounded-md">
      <img className="w-16 mx-auto" src={icon} alt={name} />
      <h5 className="text-xl mt-3 mb-2">{name}</h5>
      <div>
        {skills?.map((item) => (
          <button className="skill-btn" key={item}>
            {item}
          </button>
        ))}
      </div>
    </article>
  );
}
