import { Outlet, useLoaderData } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../../redux/authSlice';

import Footer from './_footer';
import MainNavigation from './_header';
import { UpdateRedux } from '../../../util/loaderChecks';
import { memo } from 'react';

function Layout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default memo(Layout);

// export function loader() {
//   const cookieData = document.cookie;

//   let img = 'default.jpg';
//   let name = '';

//   if (cookieData) {
//     const user = JSON.parse(localStorage.getItem('user'));
//     img = user.photo;
//     name = user.name;
//   }
//   if (!cookieData) {
//     return { hasCookie: false };
//   }
//   const data = {
//     hasCookie: true,
//     img,
//     name,
//   };
//   return data;
// }
