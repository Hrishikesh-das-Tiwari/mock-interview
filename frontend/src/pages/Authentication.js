import axios from 'axios';
import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthPage() {
  return <AuthForm />;
}

export default AuthPage;

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'signup';

  if (mode !== 'login' && mode !== 'signup') {
    throw json({ message: 'Unsupported Mode.' }, { status: 422 });
  }

  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  };
  if (mode === 'signup') {
    authData.confirmPassword = data.get('confirmPassword');
    authData.name = data.get('name');
    authData.username = data.get('username');
  }

  const configuration = {
    method: 'post',
    url: 'http://localhost:5001/' + mode,
    data: authData,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios(configuration);
    if (response.status === 422 || response.status === 401) {
      return response;
    }
    const { data } = response.data;

    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 24 * 6.9);

    // localStorage.setItem('user', data.user);
    localStorage.setItem('expiration', expiration.toISOString());

    return redirect('/');
  } catch (error) {
    console.log(error);
  }
}
