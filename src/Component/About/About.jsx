import React from "react";
import Nav from "../../Pages/Nav";
import Footer from "../../Pages/Footer";
import Slides from "../../Pages/Slides";
import Navbar from "../../Pages/NavBar";
function About() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="about-cont">
        <div className="overlay-about">
          <div>
            <Nav />
          </div>
          <h3>ABOUT US</h3>
          <p>
            Your escape to serenity, indulge in tailored spa experience for a
            renewed sense of balance and vitality.
          </p>
        </div>
      </div>

      <div className="flex container">
        <div>
          <div>
            <h3>SPA PROCEDURES</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              consequuntur vel expedita placeat repudiandae alias reiciendis aut
              impedit voluptatibus illum. Excepturi aspernatur officia in
              aperiam, eveniet laboriosam cupiditate veritatis incidunt!
            </p>
          </div>

          <div>
            <h3>REGENERATING TREATMENT</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              consequuntur vel expedita placeat repudiandae alias reiciendis aut
              impedit voluptatibus illum. Excepturi aspernatur officia in
              aperiam, eveniet laboriosam cupiditate veritatis incidunt!
            </p>
          </div>

          <div>
            <h3>MANICURE AND PEDICURE</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              consequuntur vel expedita placeat repudiandae alias reiciendis aut
              impedit voluptatibus illum. Excepturi aspernatur officia in
              aperiam, eveniet laboriosam cupiditate veritatis incidunt!
            </p>
          </div>
        </div>

        <div>
          <img src="/images/section-about-1.png" alt="" />
        </div>
        <div>
          <img src="/images/section-about-2.jpg" alt="" />
        </div>
      </div> 

       <section>
        <Slides />
      </section> 

       <div>
        <Footer />
      </div>
    </div>
  );
}

export default About;
