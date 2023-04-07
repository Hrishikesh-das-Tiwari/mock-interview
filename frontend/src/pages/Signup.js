import React from 'react';
import { Form, Link } from 'react-router-dom';
// import './signup.css';

function SignupPage() {
  return (
    <div className="main mx-auto ">
      <div className="login__form text-start">
        <div className="heading">SignUp Your Account</div>
        <Form>
          <div>
            <label className="form__label form-label" htmlFor="name">
              Name
            </label>
            <input
              className="form__input form-control "
              id="name"
              type="name"
              placeholder="hari das"
              required="required"
              name="name"
            />
          </div>

          <div className="form__group">
            <label className="form__label form-label" htmlFor="email">
              Email address
            </label>
            <input
              className="form__input form-control form-control-lg"
              id="email"
              type="email"
              placeholder="you@example.com"
              required="required"
              name="email"
            />
          </div>
          <div className="form__group ma-bt-md">
            <label className="form__label form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form__input form-control form-control-lg"
              id="password"
              type="password"
              placeholder="*********"
              required="required"
              name="password"
              minLength="8"
            />
          </div>
          <div className="form__group ma-bt-md">
            <label className="form__label form-label" htmlFor="confirmPass">
              Confirm Password
            </label>
            <input
              className="form__input form-control form-control-lg"
              id="confirmPass"
              type="password"
              placeholder="*********"
              required="required"
              name="confirmPassword"
              minLength="8"
            />
          </div>
          <div className="send-div text-center">
            <button type="button" className="btn ps-3 pe-3 m-3">
              Signup
            </button>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default SignupPage;
