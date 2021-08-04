import './Square.css';

import React from 'react';

const Square = (props: Props) => {
  const highlightClass = (props.highlighted)?'highlight':'';
  return <button className = {`square ${highlightClass}`}onClick = {props.onClick}>{props.value}</button>
}

export default Square;

type Props = any;
