import React from 'react';
import Image from 'next/image';

import PyConLogo from '../public/images/logo.png';
import LinkedInLogo from '../public/images/social1.png';
import FacebookLogo from '../public/images/social2.png';
import TwitterLogo from '../public/images/social3.png';
import InstagramLogo from '../public/images/social4.png';
import ZulipLogo from '../public/images/social5.png';
import WebChirpyLogo from '../public/images/webchirpy.png';

interface SocialItem {
  name: string;
  url: string;
  logo: StaticImageData;
}

const social: SocialItem[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/pyconindia/',
    logo: LinkedInLogo,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/PyConIndia/',
    logo: FacebookLogo,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/pyconindia',
    logo: TwitterLogo,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/__pyconindia__/',
    logo: InstagramLogo,
  },
  {
    name: 'Zulip',
    url: 'https://pyconindia.zulipchat.com/',
    logo: ZulipLogo,
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
                <li className="list-group-item" key={index}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={item.logo}
                      alt={item.name.toString()}
                      width={40}
                      height={40}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md text-center pt-md-0 pt-4">
            <h3 className="footer-title">
              Copyright @ 2023 Python Software Society of India
            </h3>
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