import Icon from "components/Icon";
import TypingParagraph from "components/TypingParagraph";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function Ending() {
  const { inView, ref } = useInView({ threshold: 0.5 });

  return (
    <div ref={ref} className="text-center text-white">
      <TypingParagraph text="Thanks for visiting!" className="text-4xl" />
      <h4 className="mt-2 text-gray-400">Let's connect</h4>
      <div className="flex justify-center w-1/2 mx-auto mt-4 space-x-2 ">
        <a
          href="https://www.linkedin.com/in/arcranges/"
          className="cursor-pointer"
          target="_blank"
        >
          <Icon name="linkedin" className="z-10 text-4xl" />
        </a>
        <a
          href="https://github.com/ArcRanges"
          className="cursor-pointer"
          target="_blank"
        >
          <Icon name="github" className="z-10 text-4xl" />
        </a>
      </div>
    </div>
  );
}
