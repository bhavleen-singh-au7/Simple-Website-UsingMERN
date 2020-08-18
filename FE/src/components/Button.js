import React from 'react';

export default function Button(props) {
  return (
    <button
      className={props.className}
      onClick={props.submitHandler}>
      {props.btnName}</button>
  );
}