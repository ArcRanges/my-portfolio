import { useEffect, useState } from "react";
import { useThemeContext } from "hooks/ThemeContext";
import { limeRGB, orangeRGB, skyBlueRGB } from "utils/constants";
import useDebounce from "hooks/useDebounce";
import useWindowDimensions from "hooks/useWindowDimensions";

const letters =
  "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ";

const themeColors: any = {
  sky: (alpha: any) => skyBlueRGB(alpha),
  orange: (alpha: any) => orangeRGB(alpha),
  lime: (alpha: any) => limeRGB(alpha),
};

export default function MatrixBackground({
  fade = false,
  className = "",
}: any) {
  const { themeState } = useThemeContext();
  const { themeColor } = themeState;
  const { height, width } = useWindowDimensions();
  const [windowSize, setWindowSize] = useState(width);
  const [windowHeight, setWindowHeight] = useState(height);
  const debouncedResize = useDebounce(windowSize, 300);
  const debouncedHeight = useDebounce(windowHeight, 300);

  useEffect(() => {
    let interval: any;
    // // Initialising the canvas
    const canvas = document.querySelector("canvas");

    if (canvas) {
      // Setting the width and height of the canvas
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Setting up the letters

      // Setting up the columns
      const fontSize = 12;
      const columns = canvas.width / fontSize;

      // Setting up the drops
      const drops: any = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = 1;
      }

      interval = setInterval(() => {
        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        ctx.fillStyle = fade ? "rgba(0, 0, 0, .05)" : "rgba(0, 0, 0, .1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < drops.length; i++) {
          const text = letters[Math.floor(Math.random() * letters.length)];
          const alpha = fade ? 0.3 : 1;
          const fillStyle = themeColors[themeColor](alpha);
          ctx.fillStyle = fillStyle;
          ctx.font = "bold 12px Orbitron";
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          drops[i]++;
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
            drops[i] = 0;
          }
        }
      }, 33);
    }

    return () => {
      clearInterval(interval);
    };
  }, [themeColor, debouncedResize, debouncedHeight]);

  useEffect(() => {
    setWindowSize(width);
  }, [width]);

  useEffect(() => {
    setWindowHeight(height);
  }, [height]);

  return (
    <canvas
      className={`absolute opacity-0 canvas-matrix ${className}`}
    ></canvas>
  );
}
