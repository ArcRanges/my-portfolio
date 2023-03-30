import Card from "components/Card";
import Span from "components/Span";
import { useThemeContext } from "hooks/ThemeContext";
import React, { useEffect } from "react";

export default function NavItem({
  className = "",
  children,
  selected,
  ...rest
}: any) {
  const { themeState } = useThemeContext();
  const { themeColor, themeColorSecondary: color } = themeState;
  const textColor = selected
    ? `text-${color}-500 font-bold`
    : `text-${themeColor}-500`;
  const borderColor = selected ? color : "";

  return (
    <Card
      borderColor={borderColor}
      className={`md:w-24 p-3 -mr-1 bg-black cursor-pointer rounded-tl-xl transition-all duration-100 hover:opacity-70 ${className}`}
      {...rest}
    >
      <Span className={`text-sm text-orbitron`} textColorClass={textColor}>
        {children}
      </Span>
    </Card>
  );
}
