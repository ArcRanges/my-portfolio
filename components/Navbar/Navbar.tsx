import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/AuthContext";
import dayjs from "dayjs";
import Card from "../Card";
import Heading from "../Heading";
import Span from "../Span";

export default function Navbar() {
  const { authState, setAuthState } = useAuthContext();
  const [sessionSeconds, setSessionSeconds] = useState(0);
  const [loggingOut, setLoggingOut] = useState(false);
  const [transparent, setTransparent] = useState(true);

  const handleLogout = () => {
    setLoggingOut(true);
  };

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

    if (authState.authenticated) {
      interval = setInterval(() => {
        setSessionSeconds((prev) => prev + 1000 / 33);
      }, 33);
    }

    return () => clearInterval(interval);
  }, [authState.authenticated]);

  useEffect(() => {
    if (loggingOut) {
      setTimeout(() => {
        setAuthState({
          type: "SET_AUTHENTICATED",
          payload: false,
        });
        setLoggingOut(false);
      }, 3000);
    }
  }, [loggingOut]);

  if (!authState.authenticated) return null;

  return (
    <nav className="fixed top-0 z-40 w-full px-5 py-3">
      <div className="container w-full mx-auto">
        <Card
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
                User:&nbsp;{authState.username}
              </Heading>
              <Span>&nbsp;|&nbsp;</Span>
              <Heading
                type="h4"
                className="cursor-pointer"
                style={{ opacity: loggingOut ? 0.5 : 1 }}
              >
                <a href="#" onClick={handleLogout}>
                  {loggingOut ? "Logging out" : "Logout"}
                </a>
              </Heading>
            </div>
          </div>
        </Card>
      </div>
    </nav>
  );
}
