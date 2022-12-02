import React, { useEffect, useReducer, useState } from "react";
import Card from "./Card";
import gsap from "gsap";
import { themeActions, useThemeContext } from "../hooks/ThemeContext";
import Icon from "./Icon";

const tl = gsap.timeline();
const initialPosition = "-3.2rem";

export default function ThemePicker() {
  const [toggled, toggle] = useReducer((prev) => !prev, false);
  const { themeState, setThemeState } = useThemeContext();
  const { selectedThemeColor } = themeState;

  const handleSelectTheme = (theme: string) => {
    setThemeState({
      type: themeActions.SET_THEME,
      payload: theme,
    });
    toggle();
  };

  useEffect(() => {
    if (toggled) {
      tl.to(".theme-picker", {
        bottom: -5,
      });
    } else {
      tl.to(".theme-picker", {
        bottom: initialPosition,
      });
    }
  }, [toggled]);

  return (
    <div className="fixed bottom-0 z-30 -translate-x-1/2 left-1/2 theme-picker">
      <Card className="!p-2">
        <div className="flex flex-col items-center justify-center">
          <Icon
            color={selectedThemeColor}
            name={toggled ? "angle-down" : "angle-up"}
            className={`text-4xl cursor-pointer text-${selectedThemeColor}-500`}
            onClick={toggle}
          />
          <div className="flex flex-row justify-between w-32">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full border-sky-500 ${
                selectedThemeColor === "sky" ? "border" : ""
              }`}
            >
              <button
                className="w-6 h-6 rounded-full cursor-pointer bg-sky-500 hover:opacity-70"
                onClick={() => handleSelectTheme("sky")}
              />
            </div>
            <div
              className={`flex items-center justify-center w-10 h-10 border-orange-500 rounded-full ${
                selectedThemeColor === "orange" ? "border" : ""
              }`}
            >
              <button
                className="w-6 h-6 bg-orange-500 rounded-full cursor-pointer hover:opacity-70"
                onClick={() => handleSelectTheme("orange")}
              />
            </div>
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full border-lime-500 ${
                selectedThemeColor === "lime" ? "border" : ""
              }`}
            >
              <button
                className="w-6 h-6 rounded-full cursor-pointer bg-lime-500 hover:opacity-70"
                onClick={() => handleSelectTheme("lime")}
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
