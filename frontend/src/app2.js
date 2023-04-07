import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { isLoggedInLoader } from './api/auth';
import App from './App';
import { authActions } from './redux/authSlice';

function App2() {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function apiCall() {
      console.log('IsLoggedIn Api is called ');
      return await isLoggedInLoader();
    }
    const res = apiCall();
    setData(res);
  }, []);

  if (data !== null && data.isLoggedIn) {
    dispatch(
      authActions.logIn({
        name: data.name,
        profile: data.profile,
      })
    );
  }

  return (
    <>
      <App />
    </>
  );
}

export default App2;
