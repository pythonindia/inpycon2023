import Image from "next/image";
import Link from "next/link";
import React from "react";

import IconComponent from "../components/icons";
import PyConLogo from "../public/images/logos/logo.png";
import WebChirpyLogo from "../public/images/logos/webchirpy.png";

interface SocialItem {
  name: string;
  url: string;
  icon: string;
}

const social: SocialItem[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/pyconindia/",
    icon: "linkedin",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/PyConIndia/",
    icon: "facebook",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/pyconindia",
    icon: "twitter",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/inpycon/",
    icon: "instagram",
  },
  {
    name: "Zulip",
    url: "https://pyconindia.zulipchat.com/",
    icon: "zulip",
  },
  {
    name: "Email",
    url: "mailto:contact@in.pycon.org",
    icon: "mail",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-footer">
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className="col-md-12 pb-5 text-center">
            <Image
              src={PyConLogo}
              alt="PyCon Logo"
              width={604}
              height={166}
              className="img-fluid"
            />
          </div>
          <div className="col-md-2 text-center text-md-start">
            <h3 className="footer-title">Connect Us On</h3>
            <ul className="social list-group list-group-horizontal justify-content-center justify-content-md-start">
              {social.map((item, index) => (
                <Link
                  key={index}
                  className="list-group-item"
                  href={item.url}
                  target="_blank"
                  aria-label={`Hyperlink to PyCon India's ${item.icon} profile.`}
                >
                  <IconComponent name={item.icon} />
                </Link>
              ))}
            </ul>
          </div>
          <div className="col-md text-center pt-md-0 pt-4">
            <h3 className="footer-title">Copyright @ 2023 PyCon India</h3>
            <a
              rel="license"
              href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
              target="_blank"
            >
              <Image
                width="88"
                height="31"
                alt="Creative Commons License"
                src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"
              />
            </a>
          </div>
          <div className="col-md-2 text-center text-md-start pt-md-0 pt-3">
            <h3 className="footer-title">Design By</h3>
            <Image
              src={WebChirpyLogo}
              alt="WebChirpy Logo"
              width={174}
              height={38}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
