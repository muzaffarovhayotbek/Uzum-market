import React from 'react';
import './HomePage.css';
import dummyjson from '../../assets/db.json';

function HomePage() {
  return (
    <div className="homePage">
      <div className="container homePage__container">
        <h2>Arzon narxlar</h2>
        {dummyjson.products.map((product) => (
          <li key={product.id} className="product">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="product-image"
            />
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>Narxi: ${product.price}</p>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
