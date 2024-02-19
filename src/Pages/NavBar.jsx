import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faGithubAlt,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Magnetic from "../Pages/Magnetic";
function NavBar() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar_flex">
          <h1>Opening Hours : Monday to Saturday - 10am to 5pm</h1>

          <span className="nav-bar-icon">
            <Magnetic>
              <div>
                <a
                  href=" https://ng.linkedin.com/in/favour-nelson-a0164523a"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    beat
                    className="navbar-icons"
                  />
                </a>
              </div>
            </Magnetic>
            <Magnetic>
              <div>
                <a
                  href="https://github.com/Nel-tech"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithubAlt}
                    beat
                    className="navbar-icons"
                  />
                </a>
              </div>
            </Magnetic>
            <Magnetic>
              <div>
                <a
                  href="https://www.twitter.com/manlike_favour"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    beat
                    className="navbar-icons"
                  />
                </a>
              </div>
            </Magnetic>
          </span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
