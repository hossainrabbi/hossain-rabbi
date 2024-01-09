import { Tilt } from "react-tilt";
import Title from "../common/Title";

export default function Portfolio() {
  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <section className="container pb-20">
      <Title
        title="My Works"
        description="I enjoy turning complex problems into simple, beautiful, and intuitive interface designs. I have develop a lot of sites using ReactJS, ReduxJS, TypeScript and related frontend frameworks. Here are some of my projects:"
      />

      <div className="mt-5 grid grid-cols-3 gap-6">
        {projectsLogoList?.map((el) => (
          <a
            href={el?.link || "#"}
            target={el?.link ? "_blank" : "_top"}
            rel={el?.link ? "noreferrer" : ""}
            key={el?.name}
          >
            <Tilt
              className="backdrop-blur-md bg-[#60bd2a28] rounded-md !min-h-[300px] !w-full !h-full shadow"
              options={defaultOptions}
            >
              <div className="relative h-full w-full project_technology">
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    className={`h-32 object-contain ${
                      el?.isSmall ? "w-32" : "w-48"
                    }`}
                    src={el?.logo}
                    alt={el?.name}
                  />
                </div>

                {el?.technology?.map((el, i) => (
                  <span
                    className={`absolute opacity-0 transition-all invisible technology ${
                      i === 0
                        ? "top-2 left-2"
                        : i === 1
                        ? "top-2 right-2"
                        : i === 2
                        ? "bottom-2 left-2"
                        : i === 3
                        ? "bottom-2 right-2"
                        : ""
                    }`}
                    style={{ textShadow: "1px 1px 3px rgb(69 69 69)" }}
                    key={el}
                  >
                    {el}
                  </span>
                ))}
              </div>
            </Tilt>
          </a>
        ))}
      </div>
    </section>
  );
}

const projectsLogoList = [
  {
    name: "Banglalink Ennovators",
    link: "https://banglalinkennovators.com",
    technology: ["ReactJS", "TypeScript", "Apexcharts", "TailwindCSS"],
    logo: "/assets/projects/ennovatorsLogo.png",
  },
  {
    name: "HRX (B2C)",
    link: "http://hrxbd.org",
    technology: ["ReactJS", "JavaScript", "Apexcharts", "Bootstrap"],
    logo: "/assets/projects/hrx-logo.svg",
    isSmall: true,
  },
  {
    name: "Bandenia",
    link: "https://broker.mortgagebcmb.com",
    technology: ["NextJS", "TypeScript", "TailwindCSS", "Antd"],
    logo: "/assets/projects/bandenia-logo.svg",
    isSmall: true,
  },
  {
    name: "CampaignX",
    link: "",
    technology: ["ReactJS", "TypeScript", "TailwindCSS", "Apexcharts"],
    logo: "/assets/projects/campaignx-logo.svg",
  },
  {
    name: "SalesX",
    link: "",
    technology: ["ReactJS", "JavaScript", "Bootstrap", "Apexcharts"],
    logo: "/assets/projects/__Sales X.svg",
    isSmall: true,
  },
  {
    name: "Upscale",
    link: "https://upscalebd.com",
    technology: ["ReactJS", "JavaScript", "TailwindCSS", "gsap"],
    logo: "/assets/projects/__upscale.svg",
  },
];
