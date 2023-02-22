import Button from "components/Button";
import Card from "components/Card";
import Icon from "components/Icon";
import Link from "next/link";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const animateProjectCards = () => {
    const tl = gsap.timeline();
    document.querySelectorAll(".project-card").forEach((el) => {
      tl.to(el, {
        delay: 0.2,
        opacity: 1,
      });
    });
  };

  useEffect(() => {
    if (inView) {
      animateProjectCards();
    } else {
      document.querySelectorAll(".project-card").forEach((el: any) => {
        el.style.opacity = 0;
      });
    }
  }, [inView]);

  return (
    <div className="w-11/12 text-center text-white ">
      <h2 className="mb-5 text-2xl" ref={ref}>
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-8 md:gap-16 md:grid-cols-12">
        <div className="col-span-1 opacity-0 md:col-span-4 project-card">
          <Card className="mb-4">
            <h4 className="mb-2">Aryo Cloud</h4>
            <p>
              An IoT Cloud Platform that enables end-users to control their
              alarm security remotely built with React/React Native/Expo.
            </p>
          </Card>
          <a href="https://epicsafety.com/" target="_blank">
            <Button small className="mb-4">
              <small>View Project</small>
              <Icon name="arrow-right" className="text-white" />
            </Button>
          </a>
        </div>
        <div className="col-span-1 opacity-0 md:col-span-4 project-card">
          <Card className="mb-4">
            <h4 className="mb-2">Sweet Collective Co.</h4>
            <p>
              An e-commerce platform for a Clay Jewerly artist built with NextJS
              and Contentful CMS. Password protected: SweetCollective2022
            </p>
          </Card>
          <a href="https://sweetcollective.vercel.app" target="_blank">
            <Button small className="mb-4 mr-2">
              <small>View Project</small>
              <Icon name="arrow-right" className="text-white" />
            </Button>
          </a>
        </div>
        <div className="col-span-1 opacity-0 md:col-span-4 project-card">
          <Card className="mb-4">
            <h4 className="mb-2">My Marketplace</h4>
            <p>
              A simple marketplace mobile app built with React Native + Expo
              with Push Notifications and real-time chat feature using Firebase.
            </p>
          </Card>
          <a href="https://github.com/ArcRanges/my-marketplace" target="_blank">
            <Button small className="mb-4">
              <small>View Project</small>
              <Icon name="arrow-right" className="text-white" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
