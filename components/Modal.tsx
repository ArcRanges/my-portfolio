import { useThemeContext } from "hooks/ThemeContext";
import React, { MouseEventHandler } from "react";
import { ProjectItem } from "containers/Projects/Projects";
import Button from "./Button";
import Card from "./Card";
import Icon from "./Icon";

interface ModalProps {
  visible: boolean;
  children?: React.ReactNode;
  title: string;
  project?: ProjectItem | null;
  onClose: () => void;
}

export default function Modal({
  visible,
  children,
  title,
  project,
  onClose,
}: ModalProps) {
  const { themeState } = useThemeContext();
  const { themeColor } = themeState;

  const overlayExtraClass = visible ? "z-20 opacity-90" : "-z-20 opacity-0";
  const contentExtraClass = visible
    ? "z-30 opacity-100 transition-all duration-300 -translate-y-1/2"
    : "-z-30 opacity-0 translate-y-0";

  return (
    <>
      <div
        className={`fixed w-screen h-screen transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2 bg-black top-1/2 left-1/2 ${overlayExtraClass}`}
        onClick={onClose}
      />
      <div
        className={`fixed w-full h-full -translate-x-1/2 top-1/2 left-1/2 py-10 md:py-20 ${contentExtraClass}`}
      >
        <Card className="flex flex-col h-full overflow-y-scroll md:overflow-y-auto opacity-90">
          <div
            className={`pb-4 border-b-2 border-${themeColor}-500/50 flex justify-between items-center`}
          >
            <h2>{project?.title ?? title}</h2>
            <button onClick={onClose}>
              <Icon
                name="times"
                className="text-2xl text-white gx-cursor hover:opacity-70"
              />
            </button>
          </div>
          {children}
        </Card>
      </div>
    </>
  );
}
