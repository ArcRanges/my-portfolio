import React from "react";
import { useThemeContext } from "hooks/ThemeContext";

export default function Card({ className = "", children, ...rest }: any) {
  const { themeState } = useThemeContext();
  const { themeColor } = themeState;

  const dynamicClass = `from-${themeColor}-800/30 border-${themeColor}-500`;

  return (
    <div
      {...rest}
      className={`p-5 border bg-gradient-to-tl ${dynamicClass} ${className}`}
    >
      {children}
    </div>
  );
}
