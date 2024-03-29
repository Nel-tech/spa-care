import React, { useState } from "react";
import { Link } from "react-router-dom";
import Magnetic from "./Magnetic";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  // const [mobileNav, setMobileNav] = useState(/* initial state */);
  const [dropDown, SetDropDown] = useState(false);

  // function toggleNavbar() {
  //   setMobileNav(!mobileNav);
  // }

  // function closeNavbar() {
  //   setMobileNav(false);
  // }

  function DropDown() {
    SetDropDown(!dropDown);
  }

  return (
    <div>
      <div className="nav-container">
        <img src="/images/Union (1).svg" alt="" className="logo" />

        <div>
          <nav>
            <div>
              <Magnetic>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </Magnetic>
            </div>

            <div>
              <Magnetic style={{ zIndex: 9999 }}>
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </Magnetic>
            </div>

            <div>
              <Magnetic>
                <div className="nav-link" onClick={DropDown}>
                  ShowCase
                </div>
              </Magnetic>

              <div className={`drop-down ${dropDown ? "open" : "close"}`}>
                <div>
                  <Magnetic style={{ zIndex: 9999 }}>
                    <Link to="/services" className="drop-down-link">
                      Services
                    </Link>
                  </Magnetic>
                  <div className="line"></div>
                </div>

                <div>
                  <Magnetic style={{ zIndex: 9999 }}>
                    <Link to="/gallery" className="drop-down-link">
                      Gallery
                    </Link>
                  </Magnetic>
                  <div className="line"></div>
                </div>

                <div>
                  <Magnetic style={{ zIndex: 9999 }}>
                    <Link to="/experts" className="drop-down-link">
                      Our Experts
                    </Link>
                  </Magnetic>
                  <div className="line"></div>
                </div>
              </div>
            </div>
            <div>
              <Magnetic style={{ zIndex: 9999 }}>
                <Link to="/appointment" className="nav-link">
                  Appointment
                </Link>
              </Magnetic>
            </div>

            <div>
              <Magnetic style={{ zIndex: 9999 }}>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </Magnetic>
            </div>

            {/* ... other nav links */}
          </nav>

          {/* <div>
            <Magnetic>
              <FontAwesomeIcon
                icon={faBars}
                className="nav__bars"
                onClick={toggleNavbar}
              />
            </Magnetic>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Nav;
