import Card from "components/Card";
import TypingParagraph from "components/TypingParagraph";
import { useInView } from "react-intersection-observer";
import Origin from "./Origin";

export default function About() {
  const { ref, inView } = useInView({ threshold: 1 });

  return (
    <div className="w-full text-center md:text-left">
      <div ref={ref} className="grid grid-cols-12 mt-5">
        <div className="flex flex-col items-start justify-center order-2 h-full col-span-12 text-left md:col-span-6 md:order-1">
          {inView && (
            <>
              <h2 className="mb-2 text-xl text-white">About Me</h2>
              <Card>
                <TypingParagraph
                  className="mb-2 text-white"
                  text="I'm a Full Stack Developer born in the Philippines and migrated to Canada years ago. My passion for software development began with tinkering my robotic toys. I enjoy solving problems and learning new things through software development. Working with diverse clients and employers, I find satisfaction in completing projects, from websites to mobile apps."
                />
              </Card>
            </>
          )}
        </div>
        <div className="order-1 col-span-12 mb-3 md:col-span-6 md:order-2">
          <div className="flex items-center justify-center w-full h-full">
            <Origin />
          </div>
        </div>
      </div>
    </div>
  );
}
