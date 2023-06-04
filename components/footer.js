import logo from "../public/images/logo.png";
import linkedin from "../public/images/social1.png";
import facebook from "../public/images/social2.png";
import twitter from "../public/images/social3.png";
import instagram from "../public/images/social4.png";
import zulip from "../public/images/social5.png";
import webchirpy from "../public/images/webchirpy.png";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-footer">
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className="col-md-12 pb-5 text-center">
            <Image
              src={logo}
              alt="logo"
              width={604}
              height={166}
              className="img-fluid"
            />
          </div>
          <div className="col-md-2 text-center text-md-start">
            <h3 className="footer-title">Connect Us On</h3>
            <ul className="social list-group list-group-horizontal justify-content-center justify-content-md-start">
              <li className="list-group-item ">
                <Link
                  href="https://www.linkedin.com/company/pyconindia/"
                  target="_blank"
                >
                  <Image src={linkedin} alt="linkedin" width={40} height={40} />
                </Link>
              </li>
              <li className="list-group-item">
                <Link
                  href="https://www.facebook.com/PyConIndia/"
                  target="_blank"
                >
                  <Image src={facebook} alt="facebook" width={40} height={40} />
                </Link>
              </li>
              <li className="list-group-item">
                <Link href="https://twitter.com/pyconindia" target="_blank">
                  <Image src={twitter} alt="twitter" width={40} height={40} />
                </Link>
              </li>
              <li className="list-group-item">
                <Link
                  href="https://www.instagram.com/__pyconindia__/"
                  target="_blank"
                >
                  <Image
                    src={instagram}
                    alt="instagram"
                    width={40}
                    height={40}
                  />
                </Link>
              </li>
              <li className="list-group-item">
                <Link href="https://pyconindia.zulipchat.com/" target="_blank">
                  <Image src={zulip} alt="zulip" width={40} height={40} />
                </Link>
              </li>
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
              src={webchirpy}
              alt="webchirpy"
              width={174}
              height={38}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
