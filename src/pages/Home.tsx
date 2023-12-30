import About from "../components/Home/About";
import Hero from "../components/Home/Hero";
import Portfolio from "../components/Home/Portfolio";
import AppLayout from "../layouts/AppLayout";

export default function Home() {
  return (
    <AppLayout>
      <Hero />
      <About />
      <Portfolio />
    </AppLayout>
  );
}
