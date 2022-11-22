import About from './components/About';
import Blog from './components/Blog';
import Header from './components/Header';
import Projects from './components/Projects';

export default function App() {
  return (
    <div className="bg-secondary-bold">
      <Header />
      <About />
      <Projects />
      <Blog />
    </div>
  );
}
