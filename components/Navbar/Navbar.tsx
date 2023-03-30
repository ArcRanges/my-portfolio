import { useAppContext } from "hooks/AppContext";
import { useEffect, useState } from "react";
import NavItem from "./NavItem";
import gsap from "gsap";
import Icon from "components/Icon";

const tl = gsap.timeline({ delay: 2 });

const MENU_ITEMS = {
  home: "home",
  about: "about",
  skills: "skills",
  projects: "projects",
  contact: "contact",
};

export default function Navbar() {
  const { appState, setAppState } = useAppContext();
  const { currentMenu } = appState;
  const [collapsed, setCollapsed] = useState(false);
  const [hideMenu, setHideMenu] = useState(false);

  const setMenu = (menu: string) => {
    setAppState({
      type: "SET_MENU",
      payload: menu,
    });
  };

  const toggleMenuItems = (show: boolean) => {
    const showObj = { opacity: 1, translateY: 0 };
    const hideObj = { opacity: 0, translateY: "-1.25em" };
    const obj = show ? showObj : hideObj;

    Object.values(MENU_ITEMS).map((menu: string) => {
      tl.to(`#${menu}`, {
        duration: 0.2,
        ...obj,
      });
    });

    return tl;
  };

  useEffect(() => {
    const scrollListener = () => {
      setCollapsed(window.scrollY >= 70);
    };

    window.removeEventListener("scroll", scrollListener);
    window.addEventListener("scroll", scrollListener, { passive: true });

    toggleMenuItems(true);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <nav className="fixed z-40 w-full px-5 py-3 top-5">
      <div className="container w-full mx-auto">
        <div className="flex flex-row justify-end w-full opacity-0 md:opacity-100">
          <NavItem
            className="translate-y-5 opacity-0"
            id={MENU_ITEMS.home}
            selected={currentMenu === MENU_ITEMS.home}
            onClick={() => setMenu(MENU_ITEMS.home)}
          >
            Home
          </NavItem>
          <NavItem
            id={MENU_ITEMS.about}
            className="translate-y-5 opacity-0"
            selected={currentMenu === MENU_ITEMS.about}
            onClick={() => setMenu(MENU_ITEMS.about)}
          >
            About
          </NavItem>
          <NavItem
            id={MENU_ITEMS.skills}
            className="translate-y-5 opacity-0"
            selected={currentMenu === MENU_ITEMS.skills}
            onClick={() => setMenu(MENU_ITEMS.skills)}
          >
            Skills
          </NavItem>
          <NavItem
            id={MENU_ITEMS.projects}
            className="translate-y-5 opacity-0"
            selected={currentMenu === MENU_ITEMS.projects}
            onClick={() => setMenu(MENU_ITEMS.projects)}
          >
            Projects
          </NavItem>
          <NavItem
            id={MENU_ITEMS.contact}
            className="translate-y-5 opacity-0"
            selected={currentMenu === MENU_ITEMS.contact}
            onClick={() => setMenu(MENU_ITEMS.contact)}
          >
            Contact
          </NavItem>
        </div>
      </div>
    </nav>
  );
}
