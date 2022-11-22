import React from 'react';

const Title = ({ title, description }) => {
  return (
    <div className="text-center text-white py-3">
      <h3
        className="text-3xl relative 
          before:absolute before:-bottom-3 before:left-2/4 before:-translate-x-2/4 before:w-12 before:h-1 before:bg-secondary-light before:rounded-xl
        "
      >
        {title}
      </h3>
      <p className="mt-8 text-sm font-light max-w-4xl mx-auto">{description}</p>
    </div>
  );
};

export default Title;
