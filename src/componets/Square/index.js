import React from 'react';
import clx from 'classnames';

import './Square.scss';

function Square({ value, onClick, win }) {
  let squareClass = ["square__button"]
  if (win) {
    squareClass.push("square__button--win")
  }
  return <button className={clx(squareClass)} onClick={onClick}>{value}</button>;
}

export default Square;
