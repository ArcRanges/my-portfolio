import { useState, useEffect } from "react";

interface Props {
  text: string | string[];
  speed?: number;
  delay?: number;
  className?: string;
}

const TypingParagraph: React.FC<Props> = ({
  className = "",
  text,
  speed = 50,
  delay = 0,
}) => {
  const [typedText, setTypedText] = useState<string>("");

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    const typingDelay = speed + delay;
    const paragraph = Array.isArray(text) ? text.join("<br/><br/>") : text;
    const words = paragraph.split(" ");

    const type = (index: number): void => {
      const currentWords = words.slice(0, index + 1);
      const currentText = currentWords.join(" ");
      setTypedText(currentText);

      if (index < words.length - 1) {
        timeoutId = setTimeout(() => {
          type(index + 1);
        }, speed);
      }
    };

    timeoutId = setTimeout(() => {
      type(0);
    }, typingDelay);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [text, speed, delay]);

  return (
    <p className={className} dangerouslySetInnerHTML={{ __html: typedText }} />
  );
};

export default TypingParagraph;
