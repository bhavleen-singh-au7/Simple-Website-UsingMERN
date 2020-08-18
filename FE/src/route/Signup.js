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
    error: "",
    success: false
  });

  const { name, email, phoneNumber, password, error, success } = values;

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

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const SignUpForm = () => {
    return (
      <form onSubmit={handleSubmit} className="mt-2">
        <div className="customBorder my-3 py-3">
          <div className="form-group font-weight-bold px-4">
            <label htmlFor="name">Name</label>
            <Input
              type="text"
              id="name"
              placeholder="Enter Name"
              onChange={handleChange("name")}
            />
          </div>

          <div className="form-group font-weight-bold px-4">
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              onChange={handleChange("email")}
            />
            <small className="form-text text-muted">Your email will not be shared with anyone</small>
          </div>

          <div className="form-group font-weight-bold px-4">
            <label htmlFor="number">Phone Number</label>
            <Input
              type="text"
              name="number"
              id="number"
              placeholder="9911223344"
              pattern="[0-9]{10}"
              onChange={handleChange("number")}
            />
            <small className="form-text text-muted">Only Numric Values allowed with length of 10 characters.</small>
          </div>

          <div className="form-group font-weight-bold px-4">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Strong Password"
              onChange={handleChange("password")}
            />
            <small className="form-text text-muted">Enter combination of atleast 6 characters.</small>
          </div>

          <div className="form-group font-weight-bold px-4">
            <label htmlFor="confirm-pass">Confirm Password</label>
            <Input
              type="password"
              name="confirm-pass"
              id="confirm-pass"
              placeholder="Enter Same Password"
              onChange={handleChange("confirm-pass")}
            />
          </div>

          <div className="text-center py-2 px-4">
            <Button
              className="btn btn-outline-primary btn-block"
              btnName="Sign Up"
            />
          </div>
        </div>
      </form>
    );
  };

  return (
    <App>
      <SignUpForm />
    </App>
  );
};

export default Signup; 