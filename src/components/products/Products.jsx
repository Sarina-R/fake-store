import React, { useEffect, useState } from "react";
import "./products.scss";
import Data from "./data/Data";

const URL = "https://fakestoreapi.com/products";

const Products = () => {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setData(data);
        } else {
          throw new Error("somthing went wrong");
        }
      } catch (err) {
        setErr(err);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="container">
      <div>
        {err ? (
          <div>{err.message}</div>
        ) : data ? (
          <>
            <h1 className="fw-bold mb-5">Products</h1>
            <div className="row">
              {data.map((item) => (
                <Data
                  {...item}
                  title={item.title}
                  des={item.description}
                  price={item.price}
                  img={item.image}
                  id={item.id}
                  rate={item.rating.rate}
                  count={item.rating.count}
                />
              ))}
            </div>
          </>
        ) : (
          <div>
            <h1>Loading...</h1>
          </div>
        )}
      </div>
    </main>
  );
};

export default Products;
