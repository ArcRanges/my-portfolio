import { useThemeContext } from "hooks/ThemeContext";
import React from "react";

export default function Icon({ name, className = "", ...rest }: any) {
  const { themeState } = useThemeContext();
  const { themeColor } = themeState;
  return (
    <i
      className={`uil uil-${name} text-${themeColor}-500 ${className}`}
      {...rest}
    ></i>
  );
}
