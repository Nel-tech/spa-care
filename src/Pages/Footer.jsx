import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faPhone,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div>
      <footer>
        <heading>
          <div className="header-para">
            <h9>About</h9>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              nihil architecto consectetur tempore sapiente eligendi itaque
              repellat, earum minima? Voluptas, amet tenetur! Consectetur dolor,
              laboriosam ut, delectus, quis accusamus recusandae soluta ducimus
              illum minus asperiores eos necessitatibus. Inventore non libero
              sequi vitae ducimus aspernatur a quaerat dicta exercitationem!
              Facere, iste?
            </p>
          </div>

          <div className="header-para">
            <h9>Contact</h9>
            <div>
              <FontAwesomeIcon icon={faLocation} />
              <p>Zaria Road Kano</p>
            </div>

            <div>
              <FontAwesomeIcon icon={faPhone} />
              <p>
                <a href="tel:+2349081715621">+2349081715621</a>
              </p>
            </div>

            <div>
              <FontAwesomeIcon icon={faMessage} />
              <p>
                {" "}
                <a href="mailto:favournelson82@gmail.com">D_SPA@gmail.com</a>
              </p>
            </div>
          </div>

          <div className="header-para">
            <h9>NEWSLETTER</h9>
            <p>Sign up to our weekly newsletter list</p>

            <form action="">
              <input type="email" name="" id="" required />
              <button>GO!</button>
            </form>
          </div>
        </heading>
      </footer>
    </div>
  );
}

export default Footer;
