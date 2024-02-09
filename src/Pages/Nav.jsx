// import React, { useState } from "react";
import { Link } from "react-router-dom";
import Magnetic from "../Pages/Magnetic";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  // const [mobileNav, setMobileNav] = useState(/* initial state */);

  // function toggleNavbar() {
  //   setMobileNav(!mobileNav);
  // }

  // function closeNavbar() {
  //   setMobileNav(false);
  // }

  return (
    <div>
      <div className="nav-container">
        <h1 className="logo">Divine Tranquility</h1>

        <div>
          <nav className="nav-container">
            <div>
              <Magnetic style={{ zIndex: 9999 }}>
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
              <Magnetic style={{ zIndex: 9999 }}>
                <Link to="/services" className="nav-link">
                  Services
                </Link>
              </Magnetic>
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
