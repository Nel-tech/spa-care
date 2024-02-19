import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faPhone,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import BaseFooter from "./BaseFooter";

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-section">
          <div className="header-para">
            <h3>About</h3>
            <p className="About-pagr">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              nihil architecto consectetur tempore sapiente eligendi itaque
              repellat, earum minima? Voluptas, amet tenetur! Consectetur dolor,
              laboriosam ut, delectus, quis accusamus recusandae soluta ducimus
              illum minus asperiores eos necessitatibus. Inventore non libero
              sequi vitae ducimus aspernatur a quaerat dicta exercitationem!
              Facere, iste?
            </p>
          </div>

          <div className="header-para" id="footer-loc">
            <h3>Contact</h3>
            <div className="flex-cont">
              <FontAwesomeIcon icon={faLocation} className="footer-icon" />
              <p>Zaria Road Kano</p>
            </div>

            <div className="flex-cont">
              <FontAwesomeIcon icon={faPhone} className="footer-icon" />
              <p>
                <a href="tel:+2349081715621">+2349081715621</a>
              </p>
            </div>

            <div className="flex-cont">
              <FontAwesomeIcon icon={faMessage} className="footer-icon" />
              <p>
                {" "}
                <a href="mailto:favournelson82@gmail.com">D_SPA@gmail.com</a>
              </p>
            </div>
          </div>

          <div className="header-para" id="form-footer">
            <h3>NEWSLETTER</h3>
            <p className="form-heading">
              Sign up to our weekly newsletter list
            </p>

            <form action="">
              <input
                type="email"
                name=""
                id=""
                required
                placeholder="Email Address"
              />
              <button>GO!</button>
            </form>
          </div>
        </div>
        {/* <BaseFooter /> */}
      </footer>
    </div>
  );
}

export default Footer;
