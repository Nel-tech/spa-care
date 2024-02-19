import "../../css/style.css";
import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Magnetic from "../../Pages/Magnetic";
import Intro from "../../Pages/Intro";
import Nav from "../../Pages/Nav";
import Footer from "../../Pages/Footer";
import Navbar from "../../Pages/NavBar";

function Home() {
  return (
    <div>
      <div>
        <div>
          <Navbar />
        </div>
        <Zoom indicators={false} scale={1.4}>
          <div className="each-slide-effect slide1">
            <div className="overlay">
              <div className="slide-container">
                <Nav />
                <h2>Welcome to our spa-center </h2>
                <p>
                  Take a Break and Let Your Body Breathe Deeply in Relaxation.
                </p>
                <div className="btn-align">
                  <Magnetic>
                    <button className="btn">BOOK APPOINTMENT</button>
                  </Magnetic>
                </div>
              </div>
            </div>
          </div>

          <div className="each-slide-effect slide2">
            <div className="overlay">
              <div className="slide-container">
                <Nav />
                <h2>Welcome to our spa-center </h2>
                <p>
                  Take a Break and Let Your Body Breathe Deeply in Relaxation.
                </p>
                <div className="btn-align">
                  <Magnetic>
                    <button className="btn">BOOK APPOINTMENT</button>
                  </Magnetic>
                </div>
              </div>
            </div>
          </div>

          <div className="each-slide-effect slide3">
            <div className="overlay">
              <div className="slide-container">
                <Nav />
                <h2>Welcome to our spa-center </h2>
                <p>
                  Take a Break and Let Your Body Breathe Deeply in Relaxation.
                </p>
                <div className="btn-align">
                  <Magnetic>
                    <button className="btn">BOOK APPOINTMENT</button>
                  </Magnetic>
                </div>
              </div>
            </div>
          </div>
        </Zoom>
      </div>
      <div>
        <Intro />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
