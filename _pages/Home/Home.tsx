import MatrixBackground from "components/MatrixBackground";
import Section from "components/Section";
import { Ending } from "containers/Ending";
import About from "containers/About";
import Projects from "containers/Projects";
import Skills from "containers/Skills";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="relative pt-5 pb-16 overflow-x-hidden">
      <MatrixBackground
        fade
        className="!fixed !opacity-100 z-10 top-0 left-0"
      />
      <div className="container relative z-20 px-5 mx-auto bg-transparent sm:px-0">
        <Section>
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl">Mark Ranges</h1>
            <h4 className="mt-2 text-gray-400">Full Stack Developer</h4>
          </div>
        </Section>
        <Section>
          <About />
        </Section>
        <Section>
          <Skills />
        </Section>
        <Section>
          <Projects />
        </Section>
        <Section>
          <Ending />
        </Section>
      </div>
    </div>
  );
};

export default Home;
