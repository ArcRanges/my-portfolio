import React from "react";
import { useThemeContext } from "../hooks/ThemeContext";

export default function Paragraph({ className = "", children, ...rest }: any) {
  const { themeState } = useThemeContext();
  const { selectedThemeColor } = themeState;

  return (
    <p className={`text-${selectedThemeColor}-500 ${className}`} {...rest}>
      {children}
    </p>
  );
}
