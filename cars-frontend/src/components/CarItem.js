
import React from 'react';

function CarItem({ car }) {
  return (
    <li className="car-item">
      <h3>{car.title}</h3>
      <p>{car.description}</p>
      <p>Цена: ${car.price}</p>
    </li>
  );
}

export default CarItem;