import React from 'react';
import "./card.css"
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { useFetch } from '../hooks/useFetch';

const Cards = () => {
  const {addtoCart} = useCart()
  const {products} = useFetch()

  return (
    <div className="container">
      <h1 className="mb-5 mr-5">Our Products :-</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {products.map((product) => (
          <div key={product.id} className="col mb-3">
            <div className="card">
              <Link to={`/products/${product.id}`} className="card-link">
                <img src={product.image} className="card-img-top" style={{ height: '300px', objectFit: 'cover' }} alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <h3> price : ${product.price}</h3>
                </div>
              </Link>
              <div className="card-footer">
                <button onClick={() => addtoCart(product)} className="btn btn-warning">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
