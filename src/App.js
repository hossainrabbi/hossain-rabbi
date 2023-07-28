import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="bg-secondary-bold">
      <Header />
      <About />
      <Projects />
      {/* <Experience /> */}
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
