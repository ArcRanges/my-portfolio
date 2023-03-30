import Card from "components/Card";
import Icon from "components/Icon";
import { useThemeContext } from "hooks/ThemeContext";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { TypescriptIcon, BitbucketIcon, AtlassianIcon } from "utils/icons";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

export default function Skills() {
  const { themeState } = useThemeContext();
  const { themeColor, themeColorHex } = themeState;
  const { inView, ref } = useInView({ threshold: 0.75 });

  // This function toggles the opacity of the elements with class "icon-card"
  const toggleIcons = () => {
    // Select all the elements with class "icon-card"
    const cards = document.querySelectorAll(".icon-card");
    // Loop through each element and add a TweenLite animation using GSAP library
    for (let i = 0; i < cards.length; i++) {
      tl.to(cards[i], { opacity: 1, duration: 1 }, i * 0.2);
      // `tl` is a variable/instance of TweenLite
      // Animate the opacity property to 1 over 1 second for each card element with an index-based delay
    }
  };

  const animateCards = () => {
    const getRandomDigit = () => {
      const min = 80;
      const max = 100;
      const randomNum = Math.random() * (max - min) + min;
      return randomNum;
    };

    const cards = document.querySelectorAll(".icon-card");

    cards.forEach((card) => {
      const bg = card.querySelector(".background.absolute");
      const tl = gsap.timeline({ repeat: 0, delay: 2 });
      const height = getRandomDigit();

      tl.to(bg, {
        height: `${height}%`,
        duration: 0.5,
        ease: "power3.inOut",
        delay: 0.3,
      });
    });

    return () => {
      gsap.killTweensOf(".background.absolute");
    };
  };

  useEffect(() => {
    if (inView) {
      toggleIcons();
      animateCards();
    }
  }, [inView]);

  return (
    <div ref={ref} className="text-center text-white md:w-1/2">
      <h1 className="mb-5 text-4xl md:text-6xl">Skills</h1>
      <div className="flex flex-wrap items-center justify-between">
        <div className="m-3 text-center opacity-0 md:m-5 icon-card">
          <Card className="relative flex flex-col items-center justify-center w-20 h-20 border">
            <div
              className={`background absolute bottom-0 left-0 right-0 h-0 bg-${themeColor}-400 opacity-30`}
              style={{ height: "0%" }}
            ></div>
            <Icon name="html5" className="z-10 text-4xl" />
          </Card>
          <small className="text-white">HTML5</small>
        </div>

        <div className="m-3 text-center opacity-0 md:m-5 icon-card">
          <Card className="relative flex flex-col items-center justify-center w-20 h-20 border ">
            <div
              className={`background absolute bottom-0 left-0 right-0 h-0 bg-${themeColor}-400 opacity-30`}
              style={{ height: "0%" }}
            ></div>
            <Icon name="css3-simple" className="text-4xl" />
          </Card>
          <small className="text-white">CSS3</small>
        </div>
        <div className="m-3 text-center opacity-0 md:m-5 icon-card">
          <Card className="relative flex flex-col items-center justify-center w-20 h-20 border ">
            <div
              className={`background absolute bottom-0 left-0 right-0 h-0 bg-${themeColor}-400 opacity-30`}
              style={{ height: "0%" }}
            ></div>
            <Icon name="java-script" className="text-4xl" />
          </Card>
          <small className="text-white">JavaScript</small>
        </div>
        <div className="m-3 text-center opacity-0 md:m-5 icon-card">
          <Card className="relative flex items-center justify-center w-20 h-20 border ">
            <div
              className={`background absolute bottom-0 left-0 right-0 h-0 bg-${themeColor}-400 opacity-30`}
              style={{ height: "0%" }}
            ></div>
            <TypescriptIcon fillColor={themeColorHex} />
          </Card>
          <small className="text-white">TypeScript</small>
        </div>
        <div className="m-3 text-center opacity-0 md:m-5 icon-card">
          <Card className="relative flex flex-col items-center justify-center w-20 h-20 border ">
            <div
              className={`background absolute bottom-0 left-0 right-0 h-0 bg-${themeColor}-400 opacity-30`}
              style={{ height: "0%" }}
            ></div>
            <Icon name="react" className="text-4xl" />
          </Card>
          <small className="text-white">ReactJS</small>
        </div>
        <div className="m-3 text-center opacity-0 md:m-5 icon-card">
          <Card className="relative flex flex-col items-center justify-center w-20 h-20 border ">
            <div
              className={`background absolute bottom-0 left-0 right-0 h-0 bg-${themeColor}-400 opacity-30`}
              style={{ height: "0%" }}
            ></div>
            <Icon name="react" className="text-4xl" />
          </Card>
          <small className="text-white">React Native</small>
        </div>
        <div className="m-3 text-center opacity-0 md:m-5 icon-card">
          <Card className="relative flex flex-col items-center justify-center w-20 h-20 border ">
            <div
              className={`background absolute bottom-0 left-0 right-0 h-0 bg-${themeColor}-400 opacity-30`}
              style={{ height: "0%" }}
            ></div>
            <Icon name="database" className="text-4xl" />
          </Card>
          <small className="text-white">PostgreSQL</small>
        </div>
        <div className="m-3 text-center opacity-0 md:m-5 icon-card">
          <Card className="relative flex flex-col items-center justify-center w-20 h-20 border ">
            <div
              className={`background absolute bottom-0 left-0 right-0 h-0 bg-${themeColor}-400 opacity-30`}
              style={{ height: "0%" }}
            ></div>
            <Icon name="database" className="text-4xl" />
          </Card>
          <small className="text-white">MongoDB</small>
        </div>
        <div className="m-3 text-center opacity-0 md:m-5 icon-card">
          <Card className="relative flex flex-col items-center justify-center w-20 h-20 border ">
            <div
              className={`background absolute bottom-0 left-0 right-0 h-0 bg-${themeColor}-400 opacity-30`}
              style={{ height: "0%" }}
            ></div>
            <Icon name="database" className="text-4xl" />
          </Card>
          <small className="text-white">DynamoDB</small>
        </div>
        <div className="m-3 text-center opacity-0 md:m-5 icon-card">
          <Card className="relative flex flex-col items-center justify-center w-20 h-20 border ">
            <div
              className={`background absolute bottom-0 left-0 right-0 h-0 bg-${themeColor}-400 opacity-30`}
              style={{ height: "0%" }}
            ></div>
            <Icon name="amazon" className="text-4xl" />
          </Card>
          <small className="text-white">AWS</small>
        </div>
        <div className="m-3 text-center opacity-0 md:m-5 icon-card">
          <Card className="relative flex flex-col items-center justify-center w-20 h-20 border ">
            <div
              className={`background absolute bottom-0 left-0 right-0 h-0 bg-${themeColor}-400 opacity-30`}
              style={{ height: "0%" }}
            ></div>
            <BitbucketIcon fillColor={themeColorHex} />
          </Card>
          <small className="text-white">Bitbucket</small>
        </div>
        <div className="m-3 text-center opacity-0 md:m-5 icon-card">
          <Card className="relative flex flex-col items-center justify-center w-20 h-20 border ">
            <div
              className={`background absolute bottom-0 left-0 right-0 h-0 bg-${themeColor}-400 opacity-30`}
              style={{ height: "0%" }}
            ></div>
            <AtlassianIcon fillColor={themeColorHex} />
          </Card>
          <small className="text-white">JIRA</small>
        </div>
      </div>
    </div>
  );
}
