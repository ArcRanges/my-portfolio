import dayjs from "dayjs";
import { useEffect, useState } from "react";
import Card from "../Card";
import Heading from "../Heading";
import Span from "../Span";
import NavItem from "./NavItem";

export default function Navbar() {
  const [sessionSeconds, setSessionSeconds] = useState(0);
  const [transparent, setTransparent] = useState(true);

  useEffect(() => {
    const scrollListener = () => {
      setTransparent(window.scrollY >= 40);
    };

    window.removeEventListener("scroll", scrollListener);
    window.addEventListener("scroll", scrollListener, { passive: true });
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  useEffect(() => {
    let interval: any;

    interval = setInterval(() => {
      setSessionSeconds((prev) => prev + 1000 / 33);
    }, 33);

    return () => clearInterval(interval);
  }),
    [];

  return (
    <nav className="fixed top-0 z-40 w-full px-5 py-3">
      <div className="container w-full mx-auto">
        <div className="flex flex-row justify-end w-full">
          <NavItem selected>Home</NavItem>

          <NavItem>About</NavItem>

          <NavItem>Skills</NavItem>

          <NavItem>Projects</NavItem>
        </div>
        {/* <Card
          className={`py-2 transition-all duration-300 ${
            transparent ? "bg-black" : ""
          }`}
        >
          <div className="flex items-center justify-between w-full">
            <div className="w-80">
              <Heading type="h4">
                Session 001 - {dayjs(sessionSeconds).format("mm:ss:SSS")}
              </Heading>
            </div>
            <div className="flex flex-row">
              <Heading type="h4" className="capitalize">
                Guest
              </Heading>
            </div>
          </div>
        </Card> */}
      </div>
    </nav>
  );
}
