import { useState, useEffect } from "react";
import "./Carousel.css";
import CarouselItem from "./CarouselItem";

function Carousel({ images, intervalSeconds = 3 }) {
  const [selected, setSelected] = useState(0);

  function move(step) {
    setSelected((prev) => (prev + step + images.length) % images.length);
  }

  useEffect(() => {
    console.log("effect: starting timer, selected =", selected);

    const timer = setTimeout(() => {
      setSelected((prev) => (prev + 1) % images.length);
    }, intervalSeconds * 1000);

    return () => {
      console.log("cleanup: clearing timer");
      clearTimeout(timer);
    };
  }, [selected, intervalSeconds, images.length]);

  return (
    <div className="carousel">
      {images.map(
        (image, index) =>
          index === selected && (
            <CarouselItem src={image} alt={`תמונה ${index + 1}`} />
          )
      )}

      <button className="carousel-arrow prev" onClick={() => move(-1)}>
        ❮
      </button>
      <button className="carousel-arrow next" onClick={() => move(1)}>
        ❯
      </button>

      <div className="carousel-dots">
        {images.map((image, index) => (
          <button
            key={index}
            className={index === selected ? "carousel-dot active" : "carousel-dot"}
            onClick={() => setSelected(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;