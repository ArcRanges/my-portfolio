import React from "react";
import { useThemeContext } from "hooks/ThemeContext";

export default function ListItem({ children, className = "", ...rest }: any) {
  const { themeState } = useThemeContext();
  const { themeColor } = themeState;
  return (
    <li className={`text-${themeColor}-400 ${className}`} {...rest}>
      {children}
    </li>
  );
}
