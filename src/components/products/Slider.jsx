import React from "react";
// import "./Data.scss";
import Carousel from "react-bootstrap/Carousel";

// A helper function to split an array into chunks
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

const Data = ({ title, price, des, img, rate, count, id }) => {
  return (
    <div className="col-lg-4 col-sm-3 col-1">
      <img src={img} alt={id} className="img-fluid mb-4" />
      <div className="row">
        <div className="title-section">
          <h4 className="fw-bold">{title}</h4>
          <p>{des}</p>
        </div>
        <div className="info-section row ">
          <p className="col-6">${price}</p>
          <div className="col-6 ">
            <p>rating: {rate}</p>
            <p>count: {count}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Slider = ({ data }) => {
  // Split the data array into chunks of three items
  const slides = chunk(data, 3);

  return (
    <Carousel>
      {slides.map((slide, index) => (
        // Create a carousel item for each chunk
        <Carousel.Item key={index}>
          <div className="row">
            {slide.map((item) => (
              // Create a data component for each item
              <Data key={item.id} {...item} />
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
