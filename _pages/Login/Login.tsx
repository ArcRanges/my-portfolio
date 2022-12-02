import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Heading from "../../components/Heading";
import Spinner from "../../components/Spinner";
import { useAuthContext } from "../../hooks/AuthContext";
import { useThemeContext } from "../../hooks/ThemeContext";

const tl = gsap.timeline();

export default function Login() {
  const Router = useRouter();
  const { authState, setAuthenticated } = useAuthContext();
  const { themeState, setThemeState } = useThemeContext();
  const { selectedThemeColor } = themeState;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hasUserNameSubmitted, setHasUsernameSubmitted] = useState(false);
  const [hasPasswordSubmitted, setHasPasswordSubmitted] = useState(false);
  const [validating, setValidating] = useState(false);
  const [authorized, setAuthorized] = useState(false);

  const handleSubmitUsername = (e: any) => {
    if (e.key === "Enter") {
      setHasUsernameSubmitted(true);
    }
  };

  const handleSubmitPassword = (e: any) => {
    if (e.key === "Enter") {
      setHasPasswordSubmitted(true);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    tl.to(".identify-header", {
      opacity: 1,
      delay: 1,
    }).to(".identity-wrapper", {
      opacity: 1,
      delay: 1,
    });
  }, []);

  useEffect(() => {
    if (hasUserNameSubmitted) {
      tl.add("start")
        .to(
          ".password-header",
          {
            opacity: 1,
            delay: 1,
          },
          "start"
        )
        .to(
          "#password",
          {
            opacity: 1,
            delay: 1,
          },
          "start"
        );
    }
  }, [hasUserNameSubmitted]);

  useEffect(() => {
    if (hasPasswordSubmitted) {
      setValidating(true);
    }
  }, [hasPasswordSubmitted]);

  useEffect(() => {
    if (validating) {
      tl.add("finish");
      tl.to(
        ".identity-wrapper",
        {
          opacity: 0,
          delay: 1,
        },
        "finish"
      );

      setTimeout(() => {
        setValidating(false);
        setAuthorized(true);
      }, 1000);
    }
  }, [validating]);

  useEffect(() => {
    if (authorized) {
      setTimeout(() => {
        setAuthenticated(true);
      }, 2000);
    }
  }, [authorized]);

  useEffect(() => {
    if (authState.authenticated) {
      Router.push("/");
    }
  });

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      {!validating && (
        <>
          {!hasUserNameSubmitted && (
            <Heading
              type="h2"
              className={`mb-4 uppercase opacity-0 identify-header blink-animation`}
            >
              Please identify yourself
            </Heading>
          )}
          {hasUserNameSubmitted && !hasPasswordSubmitted && (
            <Heading
              type="h2"
              className={`mb-4 uppercase opacity-0 password-header blink-animation`}
            >
              Enter your password
            </Heading>
          )}
        </>
      )}
      {validating && (
        <Heading
          type="h2"
          className={`mb-4 uppercase validating-header blink-animation`}
        >
          Validating...
        </Heading>
      )}
      {authorized && (
        <Heading
          type="h2"
          className="mb-4 text-2xl font-bold uppercase authenticated-header "
        >
          Full Access Granted
        </Heading>
      )}

      <div className="relative flex items-center opacity-0 identity-wrapper ">
        <div className="absolute w-full h-16 bg-transparent border border-red-500" />
        {validating && (
          <div className="absolute flex items-center justify-center right-6">
            <Spinner className={`text-${selectedThemeColor}-500`} />
          </div>
        )}
        {!hasUserNameSubmitted ? (
          <input
            autoComplete="off"
            type="text"
            id="username"
            name="username"
            className={`z-10 w-11/12 p-2 mx-auto text-xl font-bold text-center uppercase bg-transparent border border-${selectedThemeColor}-500 text-${selectedThemeColor}-500 text-orbitron border-1 focus:outline-none`}
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleSubmitUsername}
            value={username}
          />
        ) : (
          <input
            type="password"
            id="password"
            name="password"
            className={`z-10 w-11/12 p-2 mx-auto text-xl font-bold text-center uppercase bg-transparent border opacity-0 border-${selectedThemeColor}-500 text-${selectedThemeColor}-500 text-orbitron border-1 focus:outline-none`}
            placeholder="••••••"
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleSubmitPassword}
            value={password}
          />
        )}
      </div>
    </div>
  );
}
