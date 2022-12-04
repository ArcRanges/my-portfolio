import React from "react";
import { useThemeContext } from "../hooks/ThemeContext";

export default function Heading({ className, children, type, ...rest }: any) {
  const { themeState } = useThemeContext();
  const { selectedThemeColor } = themeState;
  const _className = `text-${selectedThemeColor}-400 ${className}`;

  if (type === "h1")
    return (
      <h1 className={`text-4xl ${_className}`} {...rest}>
        {children}
      </h1>
    );
  if (type === "h2")
    return (
      <h2 className={`text-xl ${_className}`} {...rest}>
        {children}
      </h2>
    );
  if (type === "h3")
    return (
      <h3 className={`text-lg ${_className}`} {...rest}>
        {children}
      </h3>
    );
  if (type === "h4")
    return (
      <h4 className={`text-xs sm:text-sm md:text-md  ${_className}`} {...rest}>
        {children}
      </h4>
    );
  if (type === "h5")
    return (
      <h5 className={`text-sm ${_className}`} {...rest}>
        {children}
      </h5>
    );
  return (
    <h6 className={`text-xs ${_className}`} {...rest}>
      {children}
    </h6>
  );
}
