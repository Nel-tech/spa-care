import "../../css/style.css";
import React from "react";

import Nav from "../../Pages/Nav";
import Intro from "../../Pages/Intro";

function Home() {
  return (
    <div className="background-image">
      <div className="container">
        <Nav />
      </div>
      <Intro />
    </div>
  );
}

export default Home;
