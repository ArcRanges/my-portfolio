import React from "react";
import { useThemeContext } from "hooks/ThemeContext";

export default function ListItem({ children, className = "", ...rest }: any) {
  const { themeState } = useThemeContext();
  const { selectedThemeColor } = themeState;
  return (
    <li className={`text-${selectedThemeColor}-400 ${className}`} {...rest}>
      {children}
    </li>
  );
}
