import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Heading from '../components/Heading';

function Calculator() {

  const [sum, setSum] = useState(0);
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();

  function num1Change(event) {
    setNum1(event.target.value);
  }

  function num2Change(event) {
    setNum2(event.target.value);
  }

  function addition(e) {
    setSum(Number(num1) + Number(num2));
  }

  function subtraction() {
    setSum(Number(num1) - Number(num2));
  }

  function multiplication() {
    setSum(Number(num1) * Number(num2));

  }

  function division() {
    setSum(Number(num1) / Number(num2));
  }

  return (

    <div className='text-center bg-primary text-light calcDiv shadow-lg'>
      <div className='my-auto'>

        <Input
          type='text'
          placeholder="Give me any number"
          onChange={num1Change}
        />

        <Input
          type='text'
          placeholder="Give me any number"
          onChange={num2Change}
        />
        <br />

        <Button
          className="btn btn-outline-light mx-4 font-weight-bold m-2 "
          submitHandler={addition}
          btnName="+"
        />
        <Button
          className="btn btn-outline-light mx-4 font-weight-bold m-2 "
          submitHandler={subtraction}
          btnName="-"
        />
        <Button
          className="btn btn-outline-light mx-4 font-weight-bold m-2 "
          submitHandler={multiplication}
          btnName="*"
        />
        <Button
          className="btn btn-outline-light mx-4 font-weight-bold m-2 "
          submitHandler={division}
          btnName="/"
        />
      </div>

      <Heading
        Heading1={sum}
      />
    </div>
  );
}

export default Calculator;