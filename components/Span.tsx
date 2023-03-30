import React from "react";
import { useThemeContext } from "hooks/ThemeContext";

export default function Span({
  children,
  textColorClass = "",
  className = "",
  ...rest
}: any) {
  const { themeState } = useThemeContext();
  const { themeColor } = themeState;
  return (
    <span
      className={`${
        textColorClass ? textColorClass : `text-${themeColor}-400`
      } ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
}
