import React, { useEffect, useState } from "react";

import EdgeRunner from "./EdgeRunner";

export default function BackgroundEffects() {
  const [runSecond, setRunSecond] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRunSecond(true);
    }, 2000);
  }, []);

  return (
    <div className="fixed w-screen h-screen background-effects -z-10">
      {/* <EdgeRunner /> */}
      {/* {runSecond && <EdgeRunner />} */}
    </div>
  );
}
