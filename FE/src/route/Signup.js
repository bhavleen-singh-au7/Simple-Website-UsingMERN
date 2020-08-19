import React, { useState } from "react";
import App from "../App";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { signup } from "../backendAuth";

const Signup = () => {

  const [values, setValues] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPass: "",
    error: "",
    success: false
  });

  const { name, email, phoneNumber, password, confirmPass, error, success } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, phoneNumber, password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            phoneNumber: "",
            password: "",
            error: "",
            success: true
          });
        }
      })
      .catch(console.log("Error in signup"));
  };

  const SignUpForm = () => {
    return (
      <form className="mt-2">
        <div className="customBorder my-3 py-3">
          <div className="form-group font-weight-bold px-4">
            <label htmlFor="name">Name</label>
            <Input
              type="text"
              id="name"
              value={name}
              placeholder="Enter Name"
              onChange={handleChange("name")}
            />
          </div>

          <div className="form-group font-weight-bold px-4">
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              id="email"
              value={email}
              placeholder="Enter Email"
              onChange={handleChange("email")}
            />
            <small className="form-text text-muted">Your email will not be shared with anyone</small>
          </div>

          <div className="form-group font-weight-bold px-4">
            <label htmlFor="phoneNumber">Phone Number</label>
            <Input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              placeholder="9911223344"
              pattern="[0-9]{10}"
              onChange={handleChange("phoneNumber")}
            />
            <small className="form-text text-muted">Only Numric Values allowed with length of 10 characters.</small>
          </div>

          <div className="form-group font-weight-bold px-4">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              id="password"
              value={password}
              placeholder="Enter Strong Password"
              onChange={handleChange("password")}
            />
            <small className="form-text text-muted">Enter combination of atleast 6 characters.</small>
          </div>

          <div className="form-group font-weight-bold px-4">
            <label htmlFor="confirmPass">Confirm Password</label>
            <Input
              type="password"
              id="confirmPass"
              value={confirmPass}
              placeholder="Enter Same Password"
            />
          </div>

          <div className="text-center py-2 px-4">
            <Button
              className="btn btn-outline-primary btn-block"
              submitHandler={handleSubmit}
              btnName="Sign Up"
            />
          </div>
        </div>
      </form>
    );
  };

  const successMessage = () => {
    return (
      <div className='my-3 w-50 mx-auto'>
        <div
          className='alert alert-success'
          style={{ display: success ? "" : 'none' }}>
          <strong>New Account Created Successfully. Please <Link to='/signin'>Login Here</Link>.</strong>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className='my-3 w-50 mx-auto'>
        <div
          className='alert alert-danger'
          style={{ display: error ? "" : 'none' }}>
          {<strong>{error}</strong>}
        </div>
      </div>
    );
  };


  return (
    <App>
      {successMessage()}
      {errorMessage()}
      {SignUpForm()}
    </App>
  );
};

export default Signup; 