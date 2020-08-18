import React from 'react';

function Input(props) {
  return (

    <input
      className="form-control form-control-sm"
      type={props.type}
      name={props.name}
      id={props.id}
      placeholder={props.placeholder}
      value={props.Value}
      onChange={props.onChange}
      autoComplete="off"
      autoCapitalize="on"
    />

  );
}

export default Input;