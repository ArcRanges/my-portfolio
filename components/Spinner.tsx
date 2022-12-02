import React, { useEffect } from "react";
import gsap from "gsap";

export default function Spinner(props: any) {
  const { className = "", ...rest } = props;

  useEffect(() => {
    gsap.to(".loader", {
      rotate: "360",
      repeat: -1,
      ease: "linear",
      duration: 1,
    });
  }, []);

  return (
    <i className={`text-2xl uil uil-spinner loader ${className}`} {...rest} />
  );
}
