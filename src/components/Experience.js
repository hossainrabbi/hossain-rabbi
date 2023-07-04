import Title from "./Title";

export default function Experience() {
  return (
    <section className="wrapper pt-10" id="experience">
      <Title
        title="Work Experience"
        // description="I enjoy turning complex problems into simple, beautiful, and intuitive interface designs. I develop lots of sites with React JS in front-end and back-end with Node JS, Express JS, and MongoDB. Here are some of my projects:"
      />

      <div className="flex justify-end mt-10">
        <ol className="relative border-l border-gray-200 dark:border-gray-700 w-1/2">
          <li className="ml-8">
            <span
              className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-white"
              title="MAAC"
            >
              <img
                className="w-3 h-3"
                src="https://maacsolutions.com/favicon.ico"
                alt="MAAC"
              />
            </span>

            <time className="block absolute -left-48 mt-1 mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              January 4, 2023 - Present.
            </time>

            <div className="w-full">
              <h3 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
                Frontend Developer
              </h3>
              <p className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-400">
                Market Access Analytics and Consulting (MAAC)
              </p>
              <p className="text-white mt-3 text-sm">
                Developing and maintaining B2B, B2C, and corporate web
                applications using React.js, Redux.js, and other related
                frontend technologies.
              </p>
              {/* <ul className="list-disc ml-4 mt-3">
                <li className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
                 
                </li>
              </ul> */}
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
