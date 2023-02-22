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
  const { themeColorHex } = themeState;
  const { inView, ref } = useInView({ threshold: 0.75 });

  const toggleIcons = () => {
    const cards = document.querySelectorAll(".icon-card");
    for (let i = 0; i < cards.length; i++) {
      tl.to(cards[i], { opacity: 1, duration: 1 }, i * 0.2);
    }
  };

  useEffect(() => {
    if (inView) {
      toggleIcons();
    }
  }, [inView]);

  return (
    <div ref={ref} className="text-center text-white md:w-1/2">
      <h1 className="mb-5 text-4xl md:text-6xl">Skills</h1>
      <div className="flex flex-wrap items-center justify-between">
        <div className="m-3 text-center opacity-0 md:m-5 icon-card">
          <Card className="flex flex-col items-center justify-center w-20 h-20 border">
            <Icon name="html5" className="text-4xl" />
          </Card>
          <small className="text-white">HTML5</small>
        </div>
        <div className="m-3 text-center opacity-0 md:m-5 icon-card">
          <Card className="flex items-center justify-center w-20 h-20 border ">
            <Icon name="css3-simple" className="text-4xl" />
          </Card>
          <small className="text-white">CSS3</small>
        </div>
        <div className="m-3 text-center opacity-0 md:m-5 icon-card">
          <Card className="flex items-center justify-center w-20 h-20 border ">
            <Icon name="java-script" className="text-4xl" />
          </Card>
          <small className="text-white">JavaScript</small>
        </div>
        <div className="m-3 text-center opacity-0 md:m-5 icon-card">
          <Card className="flex items-center justify-center w-20 h-20 border ">
            <TypescriptIcon fillColor={themeColorHex} />
          </Card>
          <small className="text-white">TypeScript</small>
        </div>
        <div className="m-3 text-center opacity-0 md:m-5 icon-card">
          <Card className="flex items-center justify-center w-20 h-20 border ">
            <Icon name="react" className="text-4xl" />
          </Card>
          <small className="text-white">ReactJS</small>
        </div>
        <div className="m-3 text-center opacity-0 md:m-5 icon-card">
          <Card className="flex items-center justify-center w-20 h-20 border ">
            <Icon name="react" className="text-4xl" />
          </Card>
          <small className="text-white">React Native</small>
        </div>
        <div className="m-3 text-center opacity-0 md:m-5 icon-card">
          <Card className="flex items-center justify-center w-20 h-20 border ">
            <Icon name="database" className="text-4xl" />
          </Card>
          <small className="text-white">PostgreSQL</small>
        </div>
        <div className="m-3 text-center opacity-0 md:m-5 icon-card">
          <Card className="flex items-center justify-center w-20 h-20 border ">
            <Icon name="database" className="text-4xl" />
          </Card>
          <small className="text-white">MongoDB</small>
        </div>
        <div className="m-3 text-center opacity-0 md:m-5 icon-card">
          <Card className="flex items-center justify-center w-20 h-20 border ">
            <Icon name="database" className="text-4xl" />
          </Card>
          <small className="text-white">DynamoDB</small>
        </div>
        <div className="m-3 text-center opacity-0 md:m-5 icon-card">
          <Card className="flex items-center justify-center w-20 h-20 border ">
            <Icon name="amazon" className="text-4xl" />
          </Card>
          <small className="text-white">AWS</small>
        </div>
        <div className="m-3 text-center opacity-0 md:m-5 icon-card">
          <Card className="flex items-center justify-center w-20 h-20 border ">
            <BitbucketIcon fillColor={themeColorHex} />
          </Card>
          <small className="text-white">Bitbucket</small>
        </div>
        <div className="m-3 text-center opacity-0 md:m-5 icon-card">
          <Card className="flex items-center justify-center w-20 h-20 border ">
            <AtlassianIcon fillColor={themeColorHex} />
          </Card>
          <small className="text-white">JIRA</small>
        </div>
      </div>
    </div>
  );
}
