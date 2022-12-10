import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import Card from "components/Card";
import Heading from "components/Heading";
import MatrixBackground from "components/MatrixBackground";
import Paragraph from "components/Paragraph";
import Span from "components/Span";
import { useThemeContext } from "hooks/ThemeContext";
import Resume from "./components/Resume/Resume";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const [loaderCount, setLoaderCount] = useState(3);
  const { themeState } = useThemeContext();
  const { themeColor } = themeState;

  useEffect(() => {
    if (!loading) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".overlay", {
        height: 3000,
        width: 3000,
        duration: 1,
        opacity: 0,
      });

      gsap.to(".heading", {
        x: 0,
        duration: 1,
        ease: "none",
        opacity: 1,
        delay: 1,
      });
    }
  }, [loading]);

  useEffect(() => {
    gsap.to(".loader-inner", {
      width: "100%",
      duration: 3,
      delay: 0.5,
      ease: "ease-out",
    });

    const interval = setInterval(() => {
      setLoaderCount((prev) => {
        if (prev <= 0) clearInterval(interval);
        return prev - 1;
      });
    }, 1000);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading)
    return (
      <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-y-hidden">
        <Heading type="h2" className="mb-4 uppercase blink-animation">
          Initializing ...
        </Heading>
        <div
          className={`flex items-center justify-start px-1 bg-${themeColor}-800`}
          style={{ width: 250, height: 50 }}
        >
          <div
            className={`text-center bg-${themeColor}-200 loader-inner`}
            style={{ width: 0, height: 40 }}
          ></div>
          {loaderCount > 0 && (
            <Span className="absolute left-1/2">{loaderCount}</Span>
          )}
        </div>
      </div>
    );

  return (
    <div className="relative pt-10 pb-16 overflow-x-hidden">
      <MatrixBackground
        fade
        className="!fixed !opacity-100 z-10 top-0 left-0"
      />
      <div className="container relative z-20 px-5 mx-auto bg-transparent sm:px-0">
        <div
          className="fixed z-10 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full top-1/2 left-1/2 overlay"
          style={{ height: 0, width: 0 }}
        />
        <div className="pt-10 section1">
          <Heading
            type="h1"
            className="text-5xl font-bold text-white -translate-x-10 opacity-0 heading"
          >
            Mark Ranges
          </Heading>
          <Heading
            type="h4"
            className="text-2xl text-gray-400 -translate-x-10 opacity-0 heading top-52"
          >
            Full Stack Developer
          </Heading>

          <Card className="mt-5">
            <Paragraph className="mb-2">
              Hi. My name is Arc and I’m a Full Stack Developer. I come from the
              island of the Philippines and migrated to Canada in 2011, and I’ve
              fallen in love with this place ever since.
            </Paragraph>

            <Paragraph className="mb-2">
              Software development has always been my passion since I was born.
              It all started with breaking up small things such as my robotic
              toys and seeing what’s inside then trying to put them back
              together. This is similar to what I’m currently doing. After I see
              a great website or a fancy mobile app, I go to Youtube or watch
              some online courses to figure out how they’re made.
            </Paragraph>

            <Paragraph className="mb-2">
              My journey in software development has been fun so far and I have
              no plans stopping anytime soon. I enjoy the learning process and
              most especially the problem solving part.
            </Paragraph>

            <Paragraph className="mb-2">
              I have had multiple clients and employers from different
              backgrounds and places, and I loved working with them and their
              projects. Somehow I get that feeling of satisfaction after
              finishing up their website, web app, or mobile app and I look
              forward to that feeling every time. Thank you for taking the time
              to read and have fun looking through my projects.
            </Paragraph>
          </Card>
        </div>
        <Resume />
      </div>
    </div>
  );
};

export default Home;

// export async function getServerSideProps(ctx: GetServerSidePropsContext) {
//     return {
//         props: {
//             pageComponentProps
//         }
//     }
// }
