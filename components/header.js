import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import IconComponent from "./icons";
import logo from "../public/images/logos/logo.png";

const navBarItems = [
  {
    name: "Home",
    href: "/#hero",
    id: "hero",
    openInNewTab: false,
  },
  {
    name: "Journey",
    href: "/#journey",
    id: "journey",
    openInNewTab: false,
  },
  {
    name: "Keynotes",
    href: "/#keynote",
    id: "keynote",
    openInNewTab: false,
  },
  {
    name: "Attend",
    href: "/#attend",
    id: "attend",
    openInNewTab: false,
  },
  {
    name: "Sponsors",
    href: "/#sponsors",
    id: "sponsors",
    openInNewTab: false,
  },
  {
    name: "Community Partners",
    href: "/#community-partners",
    id: "community-partners",
    openInNewTab: false,
  },
  {
    name: "Blog",
    href: "https://in.pycon.org/blog/",
    openInNewTab: true,
  },
  {
    name: "FAQ",
    href: "/faq/",
    id: "faq",
    openInNewTab: false,
  },
  {
    name: "COC",
    href: "/code-of-conduct/",
    id: "coc",
    openInNewTab: false,
  },
  {
    name: "Python Express",
    href: "https://pythonexpress.org/",
    openInNewTab: true,
  }
]

export default function Header() {
  const [activeNavBarItem, setActiveNavBarItem] = useState();
  const [navBarToggle, setNavBarToggle] = useState(false);
  const [navBarScrollTrigger, setNavBarScrollTrigger] = useState(true);
  const elementOffsetTop = 81;

  const handleScroll = () => {
    for (let i = 0; i < navBarItems.length; i++) {
      let item = navBarItems[i];
      const sectionElement = document.getElementById(item.id);
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        const isVisible = (rect.top - elementOffsetTop <= 0) && (rect.bottom - elementOffsetTop > 0);
        if (isVisible) {
          setActiveNavBarItem(i);
          // Stop checking once we find the visible element
          break;
        }
      }
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navBarScrollTrigger]);


  const navBarClickHandler = () => {
    setNavBarToggle((prv) => (!prv));
    setNavBarScrollTrigger((prv) => (!prv));
  }

  return (
    <header className="bg-header sticky-top">
      <div className="container p-0">
        <div className="row">
          <div className="navbar navbar-expand-lg text-center">
            <div className="container">
              <Link
                className="navbar-brand d-block d-md-none headerlogo"
                href="/"
              >
                <Image
                  src={logo}
                  className="img-fluid"
                  alt="logo"
                  width={500}
                  height={500}
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded={navBarToggle ? "true" : "false"}
                aria-label="Toggle navigation"
                onClick={navBarClickHandler}
              >
                <IconComponent name="bars" color="#000" backgroundColor='#FFF' />
              </button>
              <div
                className={"navbar-collapse" + (navBarToggle ? "" : " collapse")}
                id="navbarNavDropdown"
              >
                <ul className="navbar-nav">
                  {navBarItems.map((item, index) => (
                    <li key={index} className="nav-item">
                      <Link
                        href={item.href}
                        target={item.openInNewTab ? "_blank" : "_self"}
                        onClick={navBarClickHandler}
                      >
                        <span className={"nav-link" + (index == activeNavBarItem ? " active" : "")}>
                          {item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}