import React from "react";
import "./Data.scss";

const Data = ({ title, price, des, img, rate, count, id }) => {
  const WORD_LIMIT = 10;
  const words = des.split(" ");
  const limitedWords = words.slice(0, WORD_LIMIT);
  const limitedDes = limitedWords.join(" ");

  return (
    <div className="products-data col-lg-1 col-md-2 col-sm-3 col-1">
      <div className="row">
        <img src={img} alt={id} className="img-fluid mb-4" />
      </div>
      <div className="row products-data__info align-items-end">
        <div className="title-section">
          <h4 className="fw-bold">{title}</h4>
          <p>{limitedDes}...</p>
        </div>
        <div className="row ">
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

export default Data;
