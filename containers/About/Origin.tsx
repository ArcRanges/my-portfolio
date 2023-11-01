import { useThemeContext } from "hooks/ThemeContext";
import React from "react";
import Image from "next/future/image";
import Card from "components/Card";
import gsap from "gsap";
import Link from "next/link";

export default function Origin() {
  const { themeState } = useThemeContext();
  const { themeColor } = themeState;

  const handlePinClicked = () => {
    const tl = gsap.timeline();

    tl.to(".line-1", {
      duration: 1, // Duration in seconds
      width: "90px",
      opacity: 1,
      ease: "power2.inOut",
    });

    tl.to(".location-card ", {
      duration: 1,
      opacity: 1,
    });
  };

  return (
    <div className="relative origin-container">
      <div
        className="cursor-pointer marker pulse-pin"
        onClick={handlePinClicked}
      />
      <Card className="absolute z-10 w-full p-3 opacity-0 location-card top0 -right-3/4">
        <small>
          <Link
            href="https://www.google.com/search?q=cavite%2C+philippines"
            target="_blank"
          >
            <span className="text-blue-400 cursor-pointer">
              Cavite, Philippines
            </span>
          </Link>
          <br /> [14.4791° N, 120.8960° E]
        </small>
      </Card>
      <div className="absolute border opacity-0 line-1 border-1" />
      <Image
        className={`philippines-img image ${themeColor}`}
        src="/philippines.svg"
        alt="philippines icon"
        // layout="raw"
        width={200}
        height={200}
      />
    </div>
  );
}
