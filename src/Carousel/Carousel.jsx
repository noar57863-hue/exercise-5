import { useState } from "react";
import "./Carousel.css";
import CarouselItem from "./CarouselItem";

function Carousel({ images, intervalSeconds = 3 }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="carousel">
      {images.map(
        (image, index) =>
          index === selected && (
            <CarouselItem src={image} alt={`תמונה ${index + 1}`} />
          )
      )}

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