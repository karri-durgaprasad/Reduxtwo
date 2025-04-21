import React from 'react';
import { useSelector } from 'react-redux';
import './Show.css'; // Import the external CSS file
import { Link } from 'react-router-dom';

function Show() {
  const { Pizza, Count, Total } = useSelector((state) => state.pizzas);

  return (
    <div className="show-container">
      <h2 className="heading">Your Pizza Orders</h2>

      {Pizza.length > 0 ? (
        Pizza.map((each, index) => (
          <div key={index} className="pizza-item">
            <p><strong>Name:</strong> {each.name}</p>
            <p><strong>Quantity:</strong> {each.quantity}</p>
            <hr className="divider" />
          </div>
        ))
      ) : (
        <p className="no-pizza">No Pizza Added</p>
      )}

      <div className="summary">
        <p className="summary-text"><strong>Total Count:</strong> {Count}</p>
        <p className="summary-text"><strong>Total Price:</strong> {Total}</p>
      </div>
        <Link to='/'><p>Go to Order's Page</p></Link>
    </div>
  );
}

export default Show;
