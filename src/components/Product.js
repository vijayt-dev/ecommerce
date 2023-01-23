import React from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";
function Product() {
  const { id } = useParams();
  const [data, isLoading, error] = useFetch(
    `https://dummyjson.com/products/${id}`
  );
  const navigate = useNavigate()
  // console.log(data?.title);
  console.log(data);
  const title = data?.title;
  const description = data?.description;
  const category = data?.category;
  const brand = data?.brand;
  const price = data?.price;
  const rating = data?.rating;
  const thumbnail = data?.thumbnail;
  return (
    <div className="container">
      <div className="card w-100 mb-3">
        <img src={thumbnail} className="card-img-top" alt="product-thumbnail" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6>
            <span className="badge text-bg-info me-2">{brand}</span>
            <span className="badge text-bg-info">{category}</span>
          </h6>
          <p className="card-text">{description}</p>
          <div className="d-flex gap-2">
            <p className="fw-bolder">${price}</p>
            <p className="fw-light">Rating {rating}</p>
          </div>
          <div className="input-group">
            <Link to="" className="btn btn-primary">
              Add to Cart
            </Link>
            <button onClick={() => navigate(-1)} className="btn btn-primary">Go to back</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
