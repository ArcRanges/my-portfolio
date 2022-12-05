import React from "react";
import { useThemeContext } from "hooks/ThemeContext";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input(props: InputProps) {
  const { className = "" } = props;
  const { themeState } = useThemeContext();
  const { selectedThemeColor } = themeState;

  return (
    <input
      className={`z-10 w-full py-3 px-4 mx-auto text-xl font-bold text-center uppercase bg-transparent border border-${selectedThemeColor}-500 text-${selectedThemeColor}-500 text-orbitron border-1 focus:outline-none ${className}`}
      {...props}
    />
  );
}
