import About from "./_components/About";
import Benefits from "./_components/Benefits";
import Blog from "./_components/Blog";
import Classes from "./_components/Services";
import Hero from "./_components/Hero";
import Quote from "./_components/Quote";

export default function Home() {
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
}
