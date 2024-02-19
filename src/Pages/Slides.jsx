import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slides = [
  {
    image: "/images/admin-1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed consequuntur vel expedita placeat repudiandae alias reiciendis aut impedit voluptatibus illum. Excepturi aspernatur officia in aperiam, eveniet laboriosam cupiditate veritatis incidunt!.",
  },
  {
    image: "/images/admin-2.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed consequuntur vel expedita placeat repudiandae alias reiciendis aut impedit voluptatibus illum. Excepturi aspernatur officia in aperiam, eveniet laboriosam cupiditate veritatis incidunt!.",
  },
  {
    image: "/images/admin-3.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed consequuntur vel expedita placeat repudiandae alias reiciendis aut impedit voluptatibus illum. Excepturi aspernatur officia in aperiam, eveniet laboriosam cupiditate veritatis incidunt!.",
  },
];

function Slides() {
  return (
    <div className="zoom-background">
      <div className="overlay-reviews">
        <Slide indicators={true} className="slide-container">
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="slide-image"
              />

              <div className="description">{slide.description}</div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
}

export default Slides;
