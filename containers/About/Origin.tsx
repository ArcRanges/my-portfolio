import { useThemeContext } from "hooks/ThemeContext";
import React from "react";
import Image from "next/future/image";

export default function Origin() {
  const { themeState } = useThemeContext();
  const { themeColor } = themeState;
  return (
    <div className="relative">
      <div className="marker pulse-pin" />
      <Image
        className={`philippines-img image ${themeColor}`}
        src="/philippines.svg"
        alt="philippines icon"
        layout="raw"
        width={200}
        height={200}
      />
    </div>
  );
}
