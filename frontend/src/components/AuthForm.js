import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams,
} from 'react-router-dom';
import './signup.css';

function AuthForm() {
  const data = useActionData();
  const [searchParams] = useSearchParams();
  const navigation = useNavigation();

  const isLogin = searchParams.get('mode') === 'login';

  const isSubmitting = navigation.state === 'submitting';
  return (
    <div className="main mx-auto ">
      <Link to="/">Home</Link> <Link to="/peers">Peers</Link>
      <div className="login__form text-start">
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        <div className="heading">
          {isLogin ? 'login ' : 'SignUp '}Your Account
        </div>
        <Form method="post">
          {!isLogin && (
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
          )}

          {!isLogin && (
            <div>
              <label className="form__label form-label" htmlFor="name">
                Username
              </label>
              <input
                className="form__input form-control "
                id="username"
                type="username"
                placeholder="hari das"
                required="required"
                name="username"
              />
            </div>
          )}

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
              defaultValue="user@mock.in"
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
              defaultValue="12345678"
            />
          </div>
          {!isLogin && (
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
          )}
          <div className="send-div text-center">
            <button
              className="btn ps-3 pe-3 m-3"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            <p>
              {isLogin ? 'Not a member? ' : 'Already have an account?'}
              <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
                {isLogin ? 'Create new user' : 'Login'}
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default AuthForm;
