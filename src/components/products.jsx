import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Products({ products }) {
  const { id } = useParams();

  const product = products.find(product => product.id === parseInt(id));

  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products/' + id)
  //   .then(res=>res.json())
  //   .then(json=>console.log(json))
  // } , [])

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="card mb-3 mx-5">
      <div className="row g-0">
        <div className="col-md-6">
          <img
            src={product.image}
            className="card-img-top"
            alt={product.title}
            style={{ width: "500px", height: "500px" }}
          />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h1 className="card-title">{product.title}</h1>
            <p className="card-text text-center">{product.description}</p>
            <h3 className="text-center mb-3"> Price : ${product.price}</h3>
            <div className="d-flex justify-content-around mt-5">
              <div className="button">
                <a href="/" className="btn btn-warning">
                  Buy It Now
                </a>
              </div>
              <div className="button">
                <a href="/" className="btn btn-warning">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
