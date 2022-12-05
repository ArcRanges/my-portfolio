import React from "react";
import { useThemeContext } from "hooks/ThemeContext";

export default function Card({ className = "", children, ...rest }: any) {
  const { themeState } = useThemeContext();
  const { selectedThemeColor } = themeState;

  const dynamicClass = `from-${selectedThemeColor}-800/30 border-${selectedThemeColor}-500`;

  return (
    <div
      {...rest}
      className={`p-5 border bg-gradient-to-tl ${dynamicClass} ${className}`}
    >
      {children}
    </div>
  );
}
