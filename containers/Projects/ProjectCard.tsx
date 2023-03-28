import Button from "components/Button";
import Card from "components/Card";
import { ProjectItem } from "./Projects";

export default function ProjectCard({
  project,
  handleViewProjectInfo,
}: {
  project: ProjectItem;
  handleViewProjectInfo: any;
}) {
  return (
    <>
      <div className="col-span-1 opacity-0 md:col-span-4 project-card">
        <Card className="mb-4">
          <h4 className="mb-2">{project.title}</h4>
          <p>{project.content}</p>
        </Card>
        <Button small className="mb-4" onClick={handleViewProjectInfo}>
          <small>View Project</small>
        </Button>
      </div>
    </>
  );
}
