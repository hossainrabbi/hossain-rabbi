import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header
      className="bg-cover bg-center bg-no-repeat bg-blend-overlay h-screen min-h-[500px] relative"
      style={{
        backgroundImage:
          "url('/assets/header.jpg'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))",
      }}
      id="home"
    >
      <Navbar />
      <div
        className="wrapper absolute flex justify-center items-center text-center top-2/4 left-2/4"
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="text-white">
          <img
            className="w-40 h-40 rounded-full object-contain border-[5px] border-white mx-auto"
            src="/assets/hossainrabbi.png"
            alt="Hossain Rabbi"
          />
          <h1 className="text-4xl mt-4 mb-1">I'm Hossain Rabbi</h1>
          <h3 className="flex justify-center items-center gap-1.5">
            A
            <Typewriter
              options={{
                strings: [
                  "JavaScript Developer...",
                  "React Developer...",
                  "Front End Developer...",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
        </div>
      </div>
      <div className="absolute bottom-8 left-2/4 -translate-x-2/4">
        <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
          <i className="w-7 h-11 rounded-[30px] border-[3px] border-white relative inline-block cursor-pointer after:bg-white after:w-1 after:h-3 after:absolute after:top-5 after:left-2/4 after:-translate-x-2/4 after:rounded-md animate-bounce" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
