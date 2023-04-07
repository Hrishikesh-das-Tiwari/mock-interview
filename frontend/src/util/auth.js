import { redirect } from 'react-router-dom';

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem('expiration');
  if (!storedExpirationDate) return -1;
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();

  return duration;
}

export default function hasAuthToken() {
  const tokenDuration = getTokenDuration();

  if (tokenDuration > 0) {
    return true;
  }
  if (tokenDuration <= 0) {
    return false;
  }
  return false;
}

export function tokenLoader() {
  return hasAuthToken();
}

export function checkAuthLoader() {
  const token = hasAuthToken();

  if (!token) {
    return redirect('/auth');
  }
  return null;
}
