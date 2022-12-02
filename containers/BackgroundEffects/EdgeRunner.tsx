import React from "react";

export default function EdgeRunner({ className = "" }: any) {
  return (
    <div className="edge-runner-wrapper">
      <div className="absolute w-2 h-2 rounded-full runner-head bg-sky-400" />
      <div className={`absolute edge-runner bg-sky-400  ${className}`}></div>
    </div>
  );
}
