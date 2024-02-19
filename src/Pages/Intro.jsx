// import { Link } from "react-router-dom";

// import Magnetic from "../Pages/Magnetic";
import TabNavigation from "../Pages/TabNavigation";
import Footer from "../Pages/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BaseFooter from "../Pages/BaseFooter";
import {
  faDroplet,
  faSpa,
  faKitMedical,
  faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";

function Intro() {
  return (
    <div>
      <main>
        <h4>WELCOME TO</h4>
        <p className="title-para">D_SPA MASSAGE CENTER</p>

        <div className="horizontal-line"></div>

        <p className="word-about">
          At D_spa, we are committed to promoting a sense of balance and harmony
          within.Step into our haven of serenity, and let the healing touch of
          our therapists revitalize your senses. Your journey to relaxation
          begins here. Welcome to the world of bliss at D_spa massage center
        </p>
      </main>

      <section>
        <div className="about-home_container  container">
          <div>
            <img
              src="/images/about.png"
              alt="D_SPA-about"
              className="about-img"
            />
          </div>

          <div className="about-title">
            <h5>WE BELIEVE IN OUR CUSTOMER'S SATISFACTION</h5>
            <p className="about-para">
              {" "}
              At D_spa,customer satisfaction isn't just a belief,it's a promise.
              Allow us to your exceed your expectations and embark on a wellness
              journey that leaves you rejuvenated, content, and eager to return
              to our haven of serenity
            </p>

            <div className="flex-container">
              <div>
                <FontAwesomeIcon icon={faDroplet} fade className="about-icon" />
              </div>

              <div>
                <h6>RELAX YOUR BODY</h6>
                <article>
                  At D_spa, we understand the importance of taking a pausa from
                  the demands of the outside world.Allow us to pamper you with
                  our signature treatments and create a space where the rhythmic
                  flow of a massage transport you to a state of serenity
                </article>
              </div>
            </div>
            <div className="flex-container">
              <div>
                <FontAwesomeIcon icon={faSpa} fade className="about-icon" />
              </div>

              <div>
                <h6>REFRESH YOUR MIND</h6>
                <article>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia quibusdam id eius nam atque saepe, nemo magnam
                  deleniti error quo blanditiis quia maxime hic dolorum non cum.
                </article>
              </div>
            </div>
            <div className="flex-container">
              <div>
                <FontAwesomeIcon
                  icon={faKitMedical}
                  fade
                  className="about-icon"
                />
              </div>

              <div>
                <h6>FREE MEDITATION</h6>
                <article>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia quibusdam id eius nam atque saepe, nemo magnam
                  deleniti error quo blanditiis quia maxime hic dolorum non cum.
                </article>
              </div>
            </div>

            <div className="flex-container">
              <div>
                <FontAwesomeIcon
                  icon={faUmbrellaBeach}
                  fade
                  className="about-icon"
                />
              </div>

              <div>
                <h6>BEAUTY AND WAXING</h6>
                <article>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia quibusdam id eius nam atque saepe, nemo magnam
                  deleniti error quo blanditiis quia maxime hic dolorum non cum.
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wide-container">
        <div className="wide-flex">
          <div>
            <h4 className="wide-header">IMPRESSED WITH US?</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              commodi architecto quam obcaecati unde magnam. Incidunt corrupti
              sed fugiat cum.
            </p>
          </div>

          <div>
            <button>BOOK APPOINTMENT</button>
          </div>
        </div>
      </section>

      <main>
        <h4>WE SPECIALIZED IN</h4>
        <p className="title-para">OUR HOT SERVICES</p>

        <div className="horizontal-line"></div>

        <p className="word-about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          quibusdam id eius nam atque saepe, nemo magnam deleniti error quo
          blanditiis quia maxime hic dolorum non cum.
        </p>
      </main>

      <main>
        <TabNavigation />
      </main>

      
    </div>
  );
}

export default Intro;
