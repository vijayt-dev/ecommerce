import React from "react";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import Error from "./Error";
import Loader from "./Loader";
function Products() {
  const [data, isLoading, error] = useFetch("https://dummyjson.com/products/");
  const CardComponent = () =>
    data?.products.map((value) => {
      const { id } = value;
      const { title } = value;
      const { price } = value;
      const { category } = value;
      const { thumbnail } = value;
      const path = `/product/${id}`;
      return (
        <div key={id} className="card">
          <img
            src={thumbnail}
            className="card-img-top"
            alt="product-thumbnail"
          />
          <div className="card-body">
            <Link
              className="card-title fs-5"
              style={{ color: "rgb(113 113 122)" }}
              to={path}
            >
              {title}
            </Link>
            <span
              className="d-block text-uppercase fw-lighter"
              style={{ fontSize: "12px" }}
            >
              {category}
            </span>
            <p className="card-text mt-2 fw-bold">${price}</p>
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      );
    });

  return (
    <div className="container mt-2">
      {isLoading && (
        <div>
          <Loader />
        </div>
      )}
      {error && (
        <div>
          <Error errorMessage="Something went wrong" />
        </div>
      )}
      <div className="product-grid">{CardComponent()}</div>
    </div>
  );
}

export default Products;
