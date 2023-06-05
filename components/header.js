import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export default function Header() {

  function handleClick() {

    let navDrop = document.getElementById("navbarNavDropdown")
    let hamburger = document.getElementsByClassName("navbar-toggler")[0]
    // TODO
    if (navDrop.classList[0] == "collapse" || navDrop.classList[1] == "collapse" ){
      navDrop.classList.remove("collapse")
      hamburger.setAttribute("aria-expanded","true")
    }else{
      navDrop.classList.add("collapse")
      hamburger.setAttribute("aria-expanded","false")
    }
    // TODO
  }

    return (
    <header className="bg-header">
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
                  src="/images/logo.png" 
                  className="img-fluid"
                  alt="logo"
                  width={500}
                  height={1000} />
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
                    <a className="nav-link active" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#journey">
                      Journey
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#keynote">
                      Keynotes
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#schedule">
                      Schedule
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#sponsors">
                      Events
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#sponsors">
                      Sponsors
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://in.pycon.org/blog/" target="_blank">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#attend">
                      Attend
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#faq">
                      FAQ
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      More
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Contact us
                        </a>
                      </li>
                    </ul>
                  </li>
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
