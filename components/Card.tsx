import React from "react";
import { useThemeContext } from "hooks/ThemeContext";

export default function Card({
  borderColor = "",
  className = "",
  children,
  ...rest
}: any) {
  const { themeState } = useThemeContext();
  const { themeColor } = themeState;

  const dynamicClass = borderColor
    ? `from-${borderColor}-800/30 border-${borderColor}-500`
    : `from-${themeColor}-800/30 border-${themeColor}-500`;

  return (
    <div
      {...rest}
      className={`p-5 border bg-gradient-to-tl ${dynamicClass} ${className}`}
    >
      {children}
    </div>
  );
}
