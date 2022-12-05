import React from "react";
import Card from "../../../../components/Card";
import ResumeItem from "./ResumeItem";

export default function Resume() {
  return (
    <div>
      <Card className="mt-5">
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
          subtitle="Count-Down Marketplace"
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
