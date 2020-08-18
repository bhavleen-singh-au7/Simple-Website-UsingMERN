import React from "react";
import App from "../App";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

const Signin = () => {

  const handleSubmit = () => {
    console.log('hello');
  };

  const handleChange = () => {
    console.log('dont change');
  };

  const SignInForm = () => {
    return (
      <form onSubmit={handleSubmit} className='mt-3'>
        <div className="customBorder py-3 my-5">
          <div className="form-group font-weight-bold px-4">
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              name="email"
              id="email"
              onChange={handleChange('email')}
              placeholder="Enter Email"
            />
          </div>

          <div className="form-group font-weight-bold px-4">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              name="password"
              id="password"
              onChange={handleChange('password')} placeholder="Enter Password"
            />
            <small style={{ visibility: 'hidden' }} className="form-text text-muted">Enter combination of atleast 6 characters.</small>
          </div>

          <div className="text-center py-2 px-4">
            <Button
              className="btn btn-outline-primary btn-block"
              btnName="Sign In"
            />
          </div>
        </div>
      </form>
    );
  };

  return (
    <App>
      {SignInForm()}
    </App>
  );
};

export default Signin; 