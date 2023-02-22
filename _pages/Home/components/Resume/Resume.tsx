import React, { useEffect } from "react";
import Card from "components/Card";
import ResumeItem from "./ResumeItem";
import Span from "components/Span";
import Heading from "components/Heading";
import Icon from "components/Icon";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const translates = [
  { translateY: -150, translateX: 0 },
  { translateY: -60, translateX: 150 },
  { translateY: 60, translateX: 150 },
  { translateY: 150, translateX: 0 },
  { translateY: 60, translateX: -150 },
  { translateY: -60, translateX: -150 },
];
export default function Resume() {
  // useEffect(() => {
  //   const toggleIcons = (shouldShow = true) => {
  //     for (let i = 1; i <= 6; i++) {
  //       tl.to(`#icon-${i}`, {
  //         opacity: 1,
  //         duration: 0.1,
  //         ...translates[i - 1],
  //       });
  //     }
  //     return tl;
  //   };

  //   gsap.registerPlugin(ScrollTrigger);

  //   const tl = gsap.timeline({ delay: 3.5 });

  //   ScrollTrigger.create({
  //     trigger: "#icon-1",
  //     start: "top 40%",
  //     // markers: true,
  //     onEnter: () => {
  //       const _tl = toggleIcons();
  //       _tl.to(".icon-card small", {
  //         opacity: 1,
  //       });
  //     },
  //   });
  // }, []);

  return (
    <div className="text-center md:text-left">
      <div className="grid grid-cols-12 gap-8 mt-5">
        {/* <div className="hidden col-span-0 md:col-span-4 md:block">
          <div className="flex h-full">
            <div className="flex flex-col items-center justify-center w-full h-full card-container">
              <div id="icon-1" className="text-center icon-card">
                <Card className="flex flex-col items-center justify-center w-20 h-20 border">
                  <Icon name="html5" className="text-4xl" />
                </Card>
                <small className="text-white">HTML5</small>
              </div>
              <div id="icon-2" className="text-center icon-card">
                <Card className="flex items-center justify-center w-20 h-20 border ">
                  <Icon name="css3-simple" className="text-4xl" />
                </Card>
                <small className="text-white">CSS3</small>
              </div>
              <div id="icon-3" className="text-center icon-card">
                <Card className="flex items-center justify-center w-20 h-20 border ">
                  <Icon name="java-script" className="text-4xl" />
                </Card>
                <small className="text-white">JavaScript</small>
              </div>
              <div id="icon-4" className="text-center icon-card">
                <Card className="flex items-center justify-center w-20 h-20 border ">
                  <Icon name="react" className="text-4xl" />
                </Card>
                <small className="text-white">ReactJS</small>
              </div>
              <div id="icon-5" className="text-center icon-card">
                <Card className="flex items-center justify-center w-20 h-20 border ">
                  <Icon name="database" className="text-4xl" />
                </Card>
                <small className="text-white">PostgreSQL</small>
              </div>
              <div id="icon-6" className="text-center icon-card">
                <Card className="flex items-center justify-center w-20 h-20 border ">
                  <Icon name="amazon" className="text-4xl" />
                </Card>
                <small className="text-white">AWS</small>
              </div>
            </div>
          </div>
        </div> */}
        <div className="col-span-12 md:col-span-8">
          <Card className="">
            <ResumeItem
              title="Fullstack Developer"
              subtitle="Epic Safety Inc. (2022 - Present)"
              description={[
                "Create and migrate old development environment to new stack using AWS CloudFormation and replicate the settings from production environment account",
                "Use SAM cli to update, build, and deploy new features to both development and production CF on different AWS accounts",
                "Configure development environment to take advantage of container systems using AWS ECS and ECR and review current cross-account image replication",
                "Update Bitbucket pipelines for both frontend and backend repos and replace AWS access keys with a company provided one instead of developer access keys",
                "Use Expo service and create multiple environment configs for building and compiling iOS and Android apps in dev, staging, and production builds",
                "Create, update, and deploy new endpoints for requested features that to be used by frontend (web and mobile apps)",
                "Simulate database migrations locally by creating local PostgreSQL database and restoring it with dev database before running dev and prod environment pipelines",
                "Update some description and documentation that are currently being generated automatically through OpenAPI (Swagger)",
                "Test IoT devices using AWS IoT Test Client and review current processes involved such as publishing/subscribing to multiple IoT topics",
                "Update existing AWS Lambda function, deploy it to development and production CF stacks after successfully testing new IoT device feature using AWS IoT test client",
                "Introduce new backend hires to the current cloud architecture by going through each technology involved for each section gradually and with more detail (frontend, backend, serverless stack)",
                "Assign minimal to more complex Jira tasks to new hires related to backend features, such as updating an existing endpoint, or deploying changes to AWS using SAM cli",
                "Review Bitbucket pull requests made by team and test locally before approving and merging them to dev and production environments",
              ]}
            />
          </Card>
        </div>
      </div>
      <Card className="mt-5">
        <ResumeItem
          title="Frontend Developer"
          subtitle="Epic Safety Inc. (2021 - 2022)"
          description={[
            "Develop impactful visual elements and user interfaces for the modern web using ReactJS",
            "Use modern web framework/libraries such as ReactJS with Redux + RTK and React Hooks/Context API",
            "Implement Authentication/Authorization services using AWS Cognito to manage roles and MFA",
            "Consume REST API data from backend Node/Express, and PostgreSQL, DynamoDB databases",
            "Enable PWA in Web App and implement caching, web push notifications, geolocation, and other PWA features",
            "Integrated front-end monitoring tools such as LogRocket, Bugsnag & Google Analytics, for added security, maintainability and debugging efficiency",
            "Maintain code durability and stability by writing unit tests with Jest and React Testing Library, and automated tests with Puppeteer",
            "Work with Bitbucket Pipelines, automate uploads to S3, CloudFront, and Bugsnag (map files)",
            "Create a Mobile App container with Expo IO to enable Push Notifications for PWA and publish to App Stores",
            "Publish Mobile App in Apple and Android App stores by going through their requirements and actively resolving app issues",
            "Assist marketing with Front-End related WordPress issues and design enhancements",
            "Collaborate with designer and update existing UI in both web and mobile apps to further improve user interface and experience",
          ]}
        />
      </Card>
      <Card className="mt-5">
        <ResumeItem
          title="Full Stack Django Web Developer"
          subtitle="Count-Down Marketplace (2018 - 2021)"
          description={[
            "Convert PSD design files to code in HTML5, CSS3, JavaScript, Jquery",
            "Integrate the front-end with the Python back-end using Ajax + REST API",
            "Code documentation, structure, and organization using Django framework",
            "Debugging in both front-end and back-end",
            "Strong communication and collaboration among team members",
            "Postgresql database migrations and manipulations using PGadmin4 client",
          ]}
        />
      </Card>
    </div>
  );
}
