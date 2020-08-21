import React, { useState } from "react";
import App from "../App";
import { Redirect } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { signin, isAuthenticated, authenticate } from "../backendAuth";
import loadingImg from "../img/spinner.gif";

const Signin = () => {

  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false
  });

  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAuthenticated();

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then(data => {
        if (data?.error) {
          setValues({ ...values, error: data?.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true
            });
          });
        }
      })
      .catch(console.log('SignIn request Failed'));
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (user) {
        return <p>Redirect to dashboard</p>;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  const SignInForm = () => {
    return (
      <form className='mt-3'>
        <div className="customBorder py-3 my-5">
          <div className="form-group font-weight-bold px-4">
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={handleChange('email')}
              placeholder="Enter Email"
            />
          </div>

          <div className="form-group font-weight-bold px-4">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={handleChange('password')} placeholder="Enter Password"
            />
            <small style={{ visibility: 'hidden' }} className="form-text text-muted">Enter combination of atleast 6 characters.</small>
          </div>

          <div className="text-center py-2 px-4">
            <Button
              className="btn btn-outline-primary btn-block"
              submitHandler={handleSubmit}
              btnName="Sign In"
            />
          </div>
        </div>
      </form>
    );
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className='spinner'>
          <img src={loadingImg} alt="loading" />
        </div>
      )
    );
  };

  const errorMessage = () => {
    return (
      <div className='my-3 w-50 mx-auto'>
        <div
          className='alert alert-danger'
          style={{ display: error ? "" : 'none' }}>
          <strong>{error}</strong>
        </div>
      </div>
    );
  };

  return (
    <App>
      {loadingMessage()}
      {errorMessage()}
      {SignInForm()}
      {performRedirect()}
      <p className="bg-warning text-center">{JSON.stringify(values)}</p>
    </App>
  );
};

export default Signin; 