const BlogItem = ({ image, title, desc, link }) => {
  return (
    <article className="text-white bg-secondary-light rounded">
      <div className="overflow-hidden">
        <img
          className="w-full h-56 object-cover transition-transform hover:scale-[1.2] rounded-t"
          src={image}
          alt={title}
        />
      </div>
      <div className="p-5">
        <h4 className="text-2xl">{title}</h4>
        <p className="text-sm mt-2">
          {desc}
          <a
            className="text-primary-light hover:text-primary-bold hover:underline"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            See More
          </a>
        </p>
      </div>
    </article>
  );
};

export default BlogItem;
