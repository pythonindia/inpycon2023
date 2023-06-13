import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import logo from "../public/images/logo.png";
export default function Header() {
  function handleClick() {
    let navDrop = document.getElementById("navbarNavDropdown");
    let hamburger = document.getElementsByClassName("navbar-toggler")[0];
    // TODO
    if (
      navDrop.classList[0] == "collapse" ||
      navDrop.classList[1] == "collapse"
    ) {
      navDrop.classList.remove("collapse");
      hamburger.setAttribute("aria-expanded", "true");
    } else {
      navDrop.classList.add("collapse");
      hamburger.setAttribute("aria-expanded", "false");
    }
    // TODO
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
                  aria-expanded="true"
                  aria-label="Toggle navigation"
                  onClick={handleClick}
                >
                  <FontAwesomeIcon icon={faBars} />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link href="/"><span className="nav-link active">Home</span></Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/#journey"><span className="nav-link">Journey</span></Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/#attend"><span className="nav-link">Attend</span></Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/#sponsors"><span className="nav-link">Sponsors</span></Link>
                    </li>
                    {/* <li className="nav-item">
                      <Link href="/#keynote"><span className="nav-link">Keynotes</span></Link>
                    </li> */}
                    {/* <li className="nav-item">
                      <Link href="/#schedule"><span className="nav-link">Schedule</span></Link>
                    </li> */}
                    {/* <li className="nav-item">
                      <Link href="/#events"><span className="nav-link">Events</span></Link>
                    </li> */}
                    <li className="nav-item">
                      <Link href="https://in.pycon.org/blog/" passHref>
                        <span className="nav-link" target="_blank">Blog</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/faq"><span className="nav-link">FAQ</span></Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/code-of-conduct"><span className="nav-link">COC</span></Link>
                    </li>
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
