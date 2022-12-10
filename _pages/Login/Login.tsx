import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "components/Button";
import Heading from "components/Heading";
import Input from "components/Input";
import Spinner from "components/Spinner";
import { useAuthContext } from "hooks/AuthContext";
import { useThemeContext } from "hooks/ThemeContext";

const tl = gsap.timeline();

export default function Login() {
  const Router = useRouter();
  const { authState, setAuthState } = useAuthContext();
  const { themeState } = useThemeContext();
  const { themeColor } = themeState;

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

  const handleSubmitUsernameOrPassword = () => {
    if (!hasUserNameSubmitted) {
      setHasUsernameSubmitted(true);
    }
    if (hasUserNameSubmitted) {
      setHasPasswordSubmitted(true);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    tl.to(".identify-header", {
      opacity: 1,
      delay: 1,
    })
      .to(".identity-wrapper", {
        opacity: 1,
        delay: 1,
      })
      .to(".submit-btn ", {
        opacity: 1,
        delay: 0,
      });
  }, []);

  useEffect(() => {
    if (hasUserNameSubmitted) {
      setAuthState({
        type: "SET_AUTHENTICATED",
        payload: {
          authenticated: false,
          username,
        },
      });
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
            delay: 0,
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
      }, 4000);
    }
  }, [validating]);

  useEffect(() => {
    if (authorized) {
      setTimeout(() => {
        setAuthState({
          type: "SET_AUTHENTICATED",
          payload: { authenticated: true, username },
        });
      }, 2000);
    }
  }, [authorized]);

  useEffect(() => {
    if (authState.authenticated) {
      Router.push("/");
    }
  });

  return (
    <div
      className="fixed w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
      style={{ maxWidth: 350 }}
    >
      <div className="flex flex-col items-center justify-center text-center">
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

        <div className="relative flex items-center w-full opacity-0 identity-wrapper">
          {validating && (
            <div className="absolute flex items-center justify-center right-6">
              <Spinner className={`text-${themeColor}-500`} />
            </div>
          )}
          {!hasUserNameSubmitted ? (
            <Input
              autoComplete="off"
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={handleSubmitUsername}
              value={username}
            />
          ) : (
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="••••••"
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleSubmitPassword}
              value={password}
            />
          )}
        </div>
        {!authorized && (
          <Button
            className="w-full mt-4 opacity-0 submit-btn"
            onClick={handleSubmitUsernameOrPassword}
            loading={validating}
          >
            {validating ? "Submitting..." : "Submit"}
          </Button>
        )}
      </div>
    </div>
  );
}
