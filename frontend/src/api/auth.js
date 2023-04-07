import axios from 'axios';
import { UpdateRedux } from '../util/loaderChecks';

export async function isLoggedInLoader() {
  const response = await axios('http://localhost:5001/is-logged-in', {
    withCredentials: true,
  });

  return response.data;
}
