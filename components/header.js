import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import IconComponent from "./icons";
import logo from "../public/images/logos/logo.png";
import { BreadcrumbJsonLd } from "next-seo";
import { Dropdown } from "react-bootstrap";

const navBarItems = [
  {
    name: "Home",
    href: "/#hero",
    id: "hero",
    children: [
      {
        name: "Home",
        href: "/#hero",
        id: "hero",
      },
      {
        name: "Journey",
        href: "/#journey",
        id: "journey",
        openInNewTab: false,
      },
      {
        name: "Attend",
        href: "/#attend",
        id: "attend",
        openInNewTab: false,
      },
    ],
  },
  {
    name: "Keynotes",
    href: "/#keynote",
    id: "keynote",
    openInNewTab: false,
  },
  {
    name: "Schedule",
    href: "/#schedule",
    id: "schedule",
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
    name: "Events and Spaces",
    children: [
      {
        name: "Python Express",
        href: "https://pythonexpress.org/",
        openInNewTab: true,
      },
      {
        name: "YLW (Young Learners Workshop)",
        href: "/ylw/",
        id: "ylw",
        openInNewTab: false,
      },
      {
        name: "Tinkering Space",
        href: "/tinkering-space/",
        id: "tinkering space",
        openInNewTab: false,
      },
    ],
  },
  {
    name: "Jobs",
    id: "jobs",
    children: [
      {
        name: "Job Board",
        href: "/jobs/",
        id: "jobs",
        openInNewTab: false,
      },
      {
        name: "Job Board Rules and Guidelines",
        href: "/jobs-board-rules-guidelines/",
        id: "jobs-board-rules-guidelines",
        openInNewTab: false,
      },
    ],
  },
  {
    name: "About",
    href: "#",
    openInNewTab: false,
    hasDropdown: true,
    children: [
      {
        name: "About Us",
        href: "/about-us/",
        id: "about-us",
      },
      {
        name: "Volunteers",
        href: "/volunteers/",
        id: "volunteers",
        openInNewTab: false,
      },
      {
        name: "Workgroup Leads",
        href: "/volunteers/workgroup-leads",
        id: "workgroup-leads",
        openInNewTab: false,
      },
      {
        name: "Travel",
        href: "/travel/",
        id: "travel",
        openInNewTab: false,
      },
      {
        name: "Code of Conduct",
        href: "/code-of-conduct/",
        id: "code-of-conduct",
        openInNewTab: false,
      },
      {
        name: "Reporting Guide",
        href: "/reporting-guide/",
        id: "reporting guide",
        openInNewTab: false,
      },
      {
        name: "FAQ",
        href: "/faq/",
        id: "faq",
        openInNewTab: false,
      },
    ],
  },
];

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
        const isVisible =
          rect.top - elementOffsetTop <= 0 &&
          rect.bottom - elementOffsetTop > 0;
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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navBarScrollTrigger]);

  const navBarClickHandler = () => {
    setNavBarToggle((prv) => !prv);
    setNavBarScrollTrigger((prv) => !prv);
  };

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
                <IconComponent
                  name="bars"
                  color="#000"
                  backgroundColor="#FFF"
                />
              </button>
              <div
                className={
                  "navbar-collapse" + (navBarToggle ? "" : " collapse")
                }
                id="navbarNavDropdown"
              >
                <ul className="navbar-nav">
                  {navBarItems.map((item, index) =>
                    item.children ? (
                      <DropDownMenu
                        key={index}
                        item={item}
                        navBarClickHandler={() => navBarClickHandler()}
                      />
                    ) : (
                      <li key={index} className="nav-item">
                        <Link
                          href={item.href}
                          target={item.openInNewTab ? "_blank" : "_self"}
                          onClick={navBarClickHandler}
                        >
                          <span
                            className={
                              "nav-link" +
                              (index == activeNavBarItem ? " active" : "")
                            }
                          >
                            {item.name}
                          </span>
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* schema */}
      <BreadcrumbJsonLd
        itemListElements={navBarItems.map((item, index) => ({
          position: index + 1,
          name: item.name,
          item: item.openInNewTab
            ? item.href
            : `https://in.pycon.org${item.href}`,
        }))}
      />
    </header>
  );
}

function DropDownMenu({ item, navBarClickHandler }) {
  return (
    <Dropdown className="nav-item" as={"li"}>
      <Dropdown.Toggle
        className="nav-link"
        style={{ background: "inherit", border: "none" }}
      >
        {item.name}
      </Dropdown.Toggle>
      <Dropdown.Menu align="start" as="ul" role="menu">
        {item.children.map((dropdownItem, index) => (
          <Link
            key={index}
            href={dropdownItem.href}
            onClick={navBarClickHandler}
          >
            <Dropdown.Item as="li" role="menuitem">
              {dropdownItem.name}
            </Dropdown.Item>
          </Link>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
