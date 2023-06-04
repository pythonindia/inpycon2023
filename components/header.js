import React from "react";
import { navLinks } from "../utils/data";
import Link from "next/link";

navLinks = [
    { name: "Home", 
     path: "#" 
    },
    {
      name: "Journey",
      path: "#",
    },
    {
      name: "Keynotes",
      path: "#",
    },
    {
      name: "Schedule",
      path: "#",
    },
    {
      name: "Events",
      path: "#",
    },
    {
      name: "Sponsers",
      path: "#",
    },
    {
      name: "Blog",
      path: "#",
    },
    {
      name: "Attend",
      path: "#",
    },
    {
      name: "FAQ",
      path: "#",
    },
    {
      name: "More",
      path: "#",
    },
];


export default function header() {
    return (
      <header>
        <div className="Logo">
          <h3>Logo</h3>
        </div>
        <nav>
          {navLinks.map((link, index) => {
            return (
              <ul>
                <Link href={link.path}>
                  <li key={index}>{link.name}</li>
                </Link>
              </ul>
            );
          })}
        </nav>
      </header>
    );
  }