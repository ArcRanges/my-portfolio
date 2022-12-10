import React, { useEffect } from "react";
import { useThemeContext } from "hooks/ThemeContext";
import gsap from "gsap";

export default function Button({
  className = "",
  children,
  loading,
  ...restProps
}: any) {
  const { themeState } = useThemeContext();
  const { themeColor } = themeState;

  const dynamicClass = `text-${themeColor}-500 from-${themeColor}-800/50 via-${themeColor}-700/30 to-${themeColor}-800/50 border-${themeColor}-500`;

  const loadingClass = loading ? "opacity-50" : "";

  useEffect(() => {
    if (loading) {
      gsap.to(".btn-loader", {
        width: "100%",
        delay: 0.5,
        ease: "ease-in",
        duration: 3,
      });
    }
  }, [loading]);

  return (
    <button
      className={`relative py-3 px-5 bg-gradient-to-t border transition-opacity duration-200 hover:opacity-50 ${loadingClass} ${dynamicClass} ${className}`}
      {...restProps}
      disabled={loading}
    >
      <div
        className={`w-0 h-full left-0 top-0 btn-loader absolute bg-sky-400/20`}
      />
      <span className="text-xl text-white uppercase text-orbitron">
        {children}
      </span>
    </button>
  );
}
