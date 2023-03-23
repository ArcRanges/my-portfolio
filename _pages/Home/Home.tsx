import Icon from "components/Icon";
import MatrixBackground from "components/MatrixBackground";
import Section from "components/Section";
import About from "containers/About";
import Skills from "containers/Skills";
import { NextPage } from "next";
import Link from "next/link";
import Projects from "./components/Projects";
import Resume from "./components/Resume/Resume";

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
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl">Thanks for visiting!</h1>
            <h4 className="mt-2 text-gray-400">Let's connect</h4>
            <div className="flex justify-center w-1/2 mx-auto mt-4 space-x-2 ">
              <a
                href="https://www.linkedin.com/in/arcranges/"
                className="cursor-pointer"
                target="_blank"
              >
                <Icon name="linkedin" className="z-10 text-4xl" />
              </a>
              <a
                href="https://github.com/ArcRanges"
                className="cursor-pointer"
                target="_blank"
              >
                <Icon name="github" className="z-10 text-4xl" />
              </a>
            </div>
          </div>
        </Section>
        {/* <Section fullHeight={false}>
          <div className="text-center text-white">
            <h2 className="mb-10 text-2xl">Resume</h2>
            <Resume />
          </div>
        </Section> */}
      </div>
    </div>
  );
};

export default Home;
