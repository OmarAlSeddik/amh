import About from "./_components/About";
import Benefits from "./_components/Benefits";
import Blog from "./_components/Blog";
import Hero from "./_components/Hero";
import Quote from "./_components/Quote";
import Classes from "./_components/Services";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Benefits />
      <About />
      <Classes />
      <Blog />
      <Quote />
    </main>
  );
};

export default HomePage;
