import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { increment, resetdata } from './Pizzareducer';
import { Link } from 'react-router-dom';
import './Display.css'; // Import the external CSS file

function Display() {
  const { Pizza, Count, Total } = useSelector((state) => {
    return state.pizzas;
  });
  const dispatch = useDispatch();
  const [pizzaName, setpizzaName] = useState('');
  const [quantity, setquantity] = useState(1);
  const inputref = useRef(null);

  function pizzachange(e) {
    setpizzaName(e.target.value);
  }

  function selectchange(e) {
    setquantity(Number(e.target.value));
  }

  function handleclick() {
    if (pizzaName && quantity) {
      dispatch(
        increment({
          name: pizzaName,
          quantity: quantity,
        })
      );
    } else {
      alert('Please enter valid data');
    }
    const UpdateData = {
      Pizza: [...Pizza, { name: pizzaName, quantity: quantity }],
      Count: Count + quantity,
      Total: (Count + quantity) * 10,
    };
    localStorage.setItem('updateData', JSON.stringify(UpdateData));
    setpizzaName('');
    setquantity(1);
  }

  function keychange(event) {
    if (event.key === 'Enter') {
      handleclick();
      setpizzaName('');
      setquantity(1);
    }
  }

  useEffect(() => {
    inputref.current.focus();
  }, []);

  function removefromstorage() {
    localStorage.removeItem('updateData');
    dispatch(resetdata());
  }

  return (
    <div className="container">
      <h1 className="heading">Please Order Your Pizzas</h1>
      <ul className="pizza-list">
        {Array.isArray(Pizza) && Pizza.length > 0 ? (
          Pizza.map((each, index) => (
            <li key={index} className="pizza-item">
              {each.name} - {each.quantity}
            </li>
          ))
        ) : (
          <li className="no-pizza">No Pizzas Ordered</li>
        )}
      </ul>

      <div className="summary">
        <p className="count">Count: {Count}</p>
        <p className="total">Total: {Total}</p>
      </div>

      <div className="order-form">
        <label className="label">Can I know your fav pizza?</label>
        <input
          type="text"
          placeholder="Enter pizza name"
          onChange={pizzachange}
          onKeyDown={keychange}
          ref={inputref}
          value={pizzaName}
          className="pizza-input"
        />
        <select
          className="quantity-select"
          name=""
          id=""
          onChange={selectchange}
          value={quantity}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <div className="button-container">
          <button onClick={handleclick} className="btn">
            Enter
          </button>
          <button onClick={removefromstorage} className="btn remove-btn">
          Clear Orders
          </button>
        </div>
      </div>

      <Link to="show" className="link">
        <p><u>Go for data</u></p>
      </Link>
      <Link to="about" className="link">
        <p><u>About</u></p>
      </Link>
    </div>
  );
}

export default Display;
