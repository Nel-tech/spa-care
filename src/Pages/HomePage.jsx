import React from "react";

const HomeDescription = [
  {
    Heading: "WELCOME TO OUR SPA CENTER",
    description: "Welocme to our place of serenity",
  },
  {
    Heading: "WELCOME TO OUR SPA CENTER",
    description: "Welocme to our place of hope",
  },
  {
    Heading: "WELCOME TO OUR SPA CENTER",
    description: "Welocme to our place of relaxation",
  },
];

function HomePage() {
  return (
    <div>
      {HomeDescription.map((homeDesc, index) => (
        <div key={index}></div>
      ))}
    </div>
  );
}

export default HomePage;
