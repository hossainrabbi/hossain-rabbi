import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";

export default function Portfolio({
  name,
  description,
  technologies,
  liveLink,
  gitHubLink,
  hideLine,
}) {
  return (
    <article className={`text-white my-8 lg:my-12 relative`}>
      <div className="absolute hidden lg:flex -left-10 top-1 bg-primary-bold h-6 w-6 rounded-full  justify-center items-center ring-offset-2 ring-2 ring-primary-light">
        <IoBagHandle />
      </div>

      <div
        className={`w-0.5 bg-white hidden lg:block absolute top-10 ${
          hideLine ? "h-[calc(100%-2.5rem)]" : "h-full"
        }`}
        style={{ left: "-1.82rem" }}
      />

      <div className="p-8 py-3 lg:p-0">
        <h4 className="text-2xl">{name}</h4>
        <p className="text-sm text-gray-400 my-2">{description}</p>
        <h5 className="text-md mb-1">Technology Used:</h5>
        <div>
          {technologies.map((technology) => (
            <button className="skill-btn" key={technology}>
              {technology}
            </button>
          ))}
        </div>
        {liveLink || gitHubLink ? (
          <div className="flex items-center gap-2.5 mt-5">
            {liveLink ? (
              <a
                className="text-xl hover:text-secondary-light"
                href={liveLink}
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt />
              </a>
            ) : null}
            {gitHubLink ? (
              <a
                className="text-xl hover:text-secondary-light"
                href={gitHubLink}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
