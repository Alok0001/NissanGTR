import React from 'react';
import './products.css';

function Products() {
  const products = [
    {
      id: 1,
      name: 'Nissan GTR R35',
      description: 'Legendary sports car with powerful performance and iconic design',
    },
    {
      id: 2,
      name: 'Skyline 34 R',
      description: 'Classic Japanese sports car known for its performance and style',
    },
    {
      id: 3,
      name: 'Nissan GTR',
      description: 'Variants and editions of the iconic Nissan GTR sports car',
    },
  ];

  return (
    <div className="Products">
      <h2>Products</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;

