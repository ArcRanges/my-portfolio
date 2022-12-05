import React from "react";
import { useThemeContext } from "hooks/ThemeContext";

export default function Span({ children, className = "", ...rest }: any) {
  const { themeState } = useThemeContext();
  const { selectedThemeColor } = themeState;
  return (
    <span className={`text-${selectedThemeColor}-400 ${className}`} {...rest}>
      {children}
    </span>
  );
}
