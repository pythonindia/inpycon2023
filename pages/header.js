export default function Header() {

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
                <img src="public/images/logo.png" className="img-fluid" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
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
                    <a className="nav-link" href="#events">
                      Events
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#sponsors">
                      Sponsors
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#blog">
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