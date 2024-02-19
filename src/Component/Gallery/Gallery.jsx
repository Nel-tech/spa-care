import React from "react";
import Nav from "../../Pages/Nav";
import Galleryimages from "../../Pages/Galleryimages";
import Footer from "../../Pages/Footer";
import Navbar from "../../Pages/NavBar";

function Gallery() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="gallery">
          <div className="overlay-about">
            <Nav />
            <h3>OUR GALLEY</h3>
            <p>
              Your escape to serenity, indulge in tailored spa experience for a
              renewed sense of balance and vitality.
            </p>
          </div>
        </div>

        <div>
          <Galleryimages />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
