type Props = {
  title: string;
  description: string;
  isEmail?: string;
};

const Title = ({ title, description, isEmail }: Props) => {
  return (
    <div className="text-center text-white py-3">
      <h3
        className="text-3xl relative 
          before:absolute before:-bottom-3 before:left-2/4 before:-translate-x-2/4 before:w-12 before:h-1 before:bg-secondary-light before:rounded-xl
        "
      >
        {title}
      </h3>
      <p className="mt-8 text-sm font-light max-w-4xl mx-auto">
        {description}{" "}
        {isEmail && (
          <a
            className="text-primary-bold hover:text-primary-light hover:underline"
            href="mailto:hossainrabbi259@gmail.com"
          >
            hossainrabbi259@gmail.com
          </a>
        )}{" "}
      </p>
    </div>
  );
};

export default Title;
