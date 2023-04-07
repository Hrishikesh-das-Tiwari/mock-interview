import React from 'react';
import { Form, Link } from 'react-router-dom';
// import './signup.css';

function LoginPage() {
  return (
    <div className="main mx-auto ">
      <div className="login__form text-start">
        <div className="heading">Login your account</div>
        <Form>
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
          <div className="send-div text-center">
            <button type="button" className="btn ps-3 pe-3 m-3">
              Login
            </button>
            <p>
              Not a member? <Link to="/signup">Register</Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;

export async function action({ request }) {
  const data = await request.formData();
}
