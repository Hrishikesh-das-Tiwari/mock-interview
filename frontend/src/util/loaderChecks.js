import { useSelector, useDispatch } from 'react-redux';
import { redirect } from 'react-router-dom';
import { authActions } from '../redux/authSlice';

export async function protectLoader() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const loggedIn = await useSelector((state) => state.auth.isLoggedIn);

  if (!loggedIn) {
    throw redirect('/auth');
  }
  return null;
}

export function UpdateRedux(data) {
  const dispatch = useDispatch();
  // if (!data.isLoggedIn) {
  //   dispatch(authActions.logOut());
  // }
  // if (data.isLoggedIn) {
  dispatch(
    authActions.manipulateLoggedStatus({
      isLoggedIn: data.isLoggedIn,
      name: data.name,
      profile: data.profile,
    })
  );
  // }
  return true;
}
