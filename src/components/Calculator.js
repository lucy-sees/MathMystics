import React, { useState } from 'react';
import calculate from '../logic/calculate';
// Update calculator component
function Calc() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const result = calculate(state, e.target.textContent);
    setState(result);
  };

  const { total, next } = state;

  return (
    <div className="calc">
      <div className="first row">
        <p className="result">{next || total}</p>
      </div>
      <div className="second row">
        <button type="button" onClick={handleClick}>
          AC
        </button>
        <button type="button" onClick={handleClick}>
          +/-
        </button>
        <button type="button" onClick={handleClick}>
          %
        </button>
        <button className="orange" type="button" onClick={handleClick}>
          ÷
        </button>
      </div>
      <div className="third row">
        <button type="button" onClick={handleClick}>
          7
        </button>
        <button type="button" onClick={handleClick}>
          8
        </button>
        <button type="button" onClick={handleClick}>
          9
        </button>
        <button className="orange" type="button" onClick={handleClick}>
          x
        </button>
      </div>
      <div className="fourth row">
        <button type="button" onClick={handleClick}>
          4
        </button>
        <button type="button" onClick={handleClick}>
          5
        </button>
        <button type="button" onClick={handleClick}>
          6
        </button>
        <button className="orange" type="button" onClick={handleClick}>
          -
        </button>
      </div>
      <div className="fifth row">
        <button type="button" onClick={handleClick}>
          1
        </button>
        <button type="button" onClick={handleClick}>
          2
        </button>
        <button type="button" onClick={handleClick}>
          3
        </button>
        <button className="orange" type="button" onClick={handleClick}>
          +
        </button>
      </div>
      <div className="sixth row">
        <button className="double" type="button" onClick={handleClick}>
          0
        </button>
        <button type="button" onClick={handleClick}>
          .
        </button>
        <button className="orange" type="button" onClick={handleClick}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calc;
