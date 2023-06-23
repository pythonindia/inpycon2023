import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import logo from "../public/images/logo.png";

export default function Header() {
  const [activeNavBarItem, setActiveNavBarItem] = useState(0);
  const [navBarToggle, setNavBarToggle] = useState(false);
  const navBarItems = [
    {
      name: "Home",
      href: "/",
      openInNewTab: false,
    },
    {
      name: "Journey",
      href: "/#journey",
      openInNewTab: false,
    },
    {
      name: "Attend",
      href: "/#attend",
      openInNewTab: false,
    },
    {
      name: "Sponsors",
      href: "/#sponsors",
      openInNewTab: false,
    },
    {
      name: "Blog",
      href: "https://in.pycon.org/blog/",
      openInNewTab: true,
    },
    {
      name: "FAQ",
      href: "/faq",
      openInNewTab: false,
    },
    {
      name: "COC",
      href: "/code-of-conduct",
      openInNewTab: false,
    }
  ]


  const handleNavToggle = (indexValue) => {
    setNavBarToggle(false)
    setActiveNavBarItem(indexValue)
  }

  return (
    <header className="bg-header sticky-top">
      <div className="container p-0">
        <div className="row">
          <div className="col-md-12">
            <div className="navbar navbar-expand-lg text-center">
              <div className="container">
                <a
                  className="navbar-brand d-block d-md-none headerlogo"
                  href="#"
                >
                  <Image
                    src={logo}
                    className="img-fluid"
                    alt="logo"
                    width={500}
                    height={1000}
                  />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded={navBarToggle ? "true" : "false"}
                  aria-label="Toggle navigation"
                  onClick={() => setNavBarToggle((prv) => (!prv))}
                >
                  <FontAwesomeIcon icon={faBars} />
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
                          onClick={() => handleNavToggle(index)}
                        >
                          <span className={"nav-link" + (index === activeNavBarItem ? " active" : "")}>
                            {item.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                    {/* <li className="nav-item">
                      <Link href="/#keynote"><span className="nav-link">Keynotes</span></Link>
                    </li> */}
                    {/* <li className="nav-item">
                      <Link href="/#schedule"><span className="nav-link">Schedule</span></Link>
                    </li> */}
                    {/* <li className="nav-item">
                      <Link href="/#events"><span className="nav-link">Events</span></Link>
                    </li> */}
                    {/* <li className="nav-item dropdown">
                      <span
                        className="nav-link dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        More
                      </span>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Contact us
                          </a>
                        </li>
                      </ul>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
