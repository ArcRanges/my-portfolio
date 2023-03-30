import Button from "components/Button";
import Modal from "components/Modal";
import TypingParagraph from "components/TypingParagraph";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import data from "./data.json";
import ProjectCard from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

export type ProjectItem = typeof data[0];

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  const animateProjectCards = () => {
    const tl = gsap.timeline();
    document.querySelectorAll(".project-card").forEach((el) => {
      tl.to(el, {
        delay: 0.2,
        opacity: 1,
      });
    });
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleViewProjectInfo = (project: ProjectItem) => {
    setSelectedProject(project);
    setModalVisible(true);
  };

  useEffect(() => {
    if (inView) {
      animateProjectCards();
    } else {
      document.querySelectorAll(".project-card").forEach((el: any) => {
        el.style.opacity = 0;
      });
      setModalVisible(false);
    }
  }, [inView]);

  return (
    <div className="w-11/12 text-center text-white">
      <h2 className="mb-5 text-2xl" ref={ref}>
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-8 md:gap-16 md:grid-cols-12">
        {data.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            handleViewProjectInfo={() => handleViewProjectInfo(project)}
          />
        ))}
      </div>

      <Modal
        visible={modalVisible}
        title={selectedProject?.title ?? ""}
        onClose={handleModalClose}
        project={selectedProject}
      >
        <div className="flex flex-col flex-1 pt-5">
          <div className="grid flex-1 gap-8 md:grid-cols-3">
            {selectedProject?.images?.map((img) => (
              <div className="h-full image-container">
                <a href={img.regular} target="_blank" rel="noopener">
                  <Image src={img.thumbnail} layout="fill" className="image" />
                </a>
              </div>
            ))}
          </div>

          <div className="flex-1 pt-5">
            <div className="mx-auto mb-4 text-justify md:w-1/2">
              {selectedProject?.description && (
                <TypingParagraph text={selectedProject?.description} />
              )}
            </div>
          </div>
          <a
            href={selectedProject?.link ?? ""}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>{selectedProject?.buttonText}</Button>
          </a>
        </div>
      </Modal>
    </div>
  );
}
