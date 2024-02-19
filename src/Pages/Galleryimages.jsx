import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faGithubAlt,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Magnetic from "../Pages/Magnetic";
import React from "react";
const GalleryImage = [
  {
    image: "/images/1-2.jpg",
  },

  {
    image: "/images/2-1.jpg",
  },

  {
    image: "/images/3-1.jpg",
  },

  {
    image: "/images/4.jpg",
  },

  {
    image: "/images/5.jpg",
  },

  {
    image: "/images/6.jpg",
  },

  {
    image: "/images/7.jpg",
  },

  {
    image: "/images/8.jpg",
  },

  {
    image: "/images/9.jpg",
  },
  {
    image: "/images/10.jpg",
  },

  {
    image: "/images/11.jpg",
  },

  {
    image: "/images/12.jpg",
  },
];

function Galleryimages() {
  return (
    <div className="gallery-img">
      {GalleryImage.map((galleryImg, index) => (
        <div key={index} className="positions">
          <div className="relative">
            <img src={galleryImg.image} alt="" className="img-width" />
          </div>
          <div className="middle-text">
            <a href="www" target="_blank" rel="noreferrer">
              Read More
            </a>
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
                      className="gallery-icons"
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
                      className="gallery-icons"
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
                      className="gallery-icons"
                    />
                  </a>
                </div>
              </Magnetic>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Galleryimages;
