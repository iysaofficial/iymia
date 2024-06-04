// Navbar Component Style File Path: public/css/pages-and-components-css/navbar.scss
import { useState } from "react";
import React from "react";
import Link from "@/utils/ActiveLink";

const NavbarStyleTwo = () => {
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area navbar-style-two">
        <div className="texap-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light bg-light">
              <Link href="/">
                <a className="navbar-brand">
                  <img src="/images/iymia.png" alt="logo" />
                </a>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="/" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Home
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#" activeClassName="active">
                      <a
                        onClick={toggleNavbar}
                        className=" dropdown-toggle  nav-link"
                      >
                        Media Coverage
                      </a>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/news" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            News
                          </a>
                        </Link>
                      </li>
                      
                      <li className="nav-item">
                        <Link
                          href="https://drive.google.com/file/d/1UVCaBsvxjac-0OF7VCAOfPJEOvskYBsz/view?usp=sharing"
                          activeClassName="active"
                        >
                          <a
                            onClick={toggleNavbar}
                            className="nav-link"
                            target="_blank"
                          >
                            Press Release 2024
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="https://drive.google.com/file/d/15kh-LQZkfM7OIu_JuRLl7LhLanf5QdwE/view?usp=sharing"
                          activeClassName="active"
                        >
                          <a
                            onClick={toggleNavbar}
                            className="nav-link"
                            target="_blank"
                          >
                            Press Release 2023
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#" activeClassName="active">
                      <a
                        onClick={toggleNavbar}
                        className=" dropdown-toggle nav-link"
                      >
                        Curation
                      </a>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="https://drive.google.com/drive/folders/1_SPW8Ez2fjU301tbjBcrCl5VzzckU_vo?usp=sharing"
                          activeClassName="active"
                        >
                          <a
                            onClick={toggleNavbar}
                            className="nav-link"
                            target="_blank"
                          >
                            Curation 2024
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="https://drive.google.com/drive/folders/1DuNcQ9B_iEZ5S2goKD5jBQb8noa_MxpS?usp=sharing"
                          activeClassName="active"
                        >
                          <a
                            onClick={toggleNavbar}
                            className="nav-link"
                            target="_blank"
                          >
                            Curation 2023
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/low/lowtahun" activeClassName="active">
                      <a
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        List of Winner
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://drive.google.com/file/d/12KOp3B-GrDc1hqY72C8AGAp-FswmCK0Q/view?usp=sharing"
                      target="_blank"
                      activeClassName="active"
                    >
                      <a onClick={toggleNavbar} className="nav-link">
                        Guide Book
                      </a>
                    </a>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Contact
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="#" activeClassName="active">
                      <a
                        onClick={toggleNavbar}
                        className=" dropdown-toggle  nav-link"
                      >
                        Gallery
                      </a>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/gallery" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Gallery 2023
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="https://drive.google.com/drive/folders/1v7k8qwGLENT3xXQHNN5yDR2dq6POKUaR?usp=sharing"
                          target="_blank"
                          activeClassName="active"
                        >
                          <a onClick={toggleNavbar} className="nav-link">
                            Gallery 2024
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/faq" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        FAQ
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="#" activeClassName="active">
                      <a
                        onClick={toggleNavbar}
                        className=" dropdown-toggle  nav-link"
                      >
                        Certificate
                      </a>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="https://drive.google.com/drive/folders/17HiPX0Oqg-dmy6GayLEtVQ3--VxwUOuA?usp=drive_link"
                          activeClassName="active"
                        >
                          <a
                            onClick={toggleNavbar}
                            className="nav-link"
                            target="_blank"
                          >
                            Certificate Supervisor
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* <li className="nav-item">
                      <a
                        href="https://drive.google.com/drive/folders/13Xy2A5KjBuoRmLZCVthoqu5m105pXwSK?usp=share_link"
                        target="_blank"
                        activeClassName="active"
                      >
                        <a onClick={toggleNavbar} className="nav-link">
                          Certificate Supervisor
                        </a>
                      </a>
                    </li> */}
                </ul>
              </div>

              {/* <div className="others-options">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScXpC2y4PjBWk81Ygmyt4oh3lTVLGjqNPYc-nAMp_GZTSV1WQ/viewform?usp=share_link" target="_blank">
                  <a className="default-btn">Register</a>
                </a>
              </div> */}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarStyleTwo;
