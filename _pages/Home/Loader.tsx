import Heading from "components/Heading";
import Span from "components/Span";
import { useThemeContext } from "hooks/ThemeContext";
import React, { useEffect, useState } from "react";

export default function Loader() {
  const { themeState } = useThemeContext();
  const { themeColor } = themeState;
  const [loaderCount, setLoaderCount] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoaderCount((prev) => {
        if (prev <= 0) clearInterval(interval);
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-y-hidden">
      <Heading type="h2" className="mb-4 uppercase blink-animation">
        Initializing ...
      </Heading>
      <div
        className={`flex items-center justify-start px-1 bg-${themeColor}-800`}
        style={{ width: 250, height: 50 }}
      >
        <div
          className={`text-center bg-${themeColor}-200 loader-inner`}
          style={{ width: 0, height: 40 }}
        ></div>
        {loaderCount > 0 && (
          <Span className="absolute left-1/2">{loaderCount}</Span>
        )}
      </div>
    </div>
  );
}
