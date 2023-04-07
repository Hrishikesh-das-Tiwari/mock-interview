import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import AuthPage, { action as authAction } from './pages/Authentication';
import HomePage from './pages/Home';
import LayoutPage from './components/ui/Layout/Layout';
import PeersPage, { loader as getPeersLoader } from './pages/Peers';
import { memo } from 'react';
import Sample, { sample } from './pages/Sample';
import { checkAuthLoader } from './util/auth';
import ProfilePage from './pages/Profile';
import { loader as profileLoader } from './pages/Profile';
import ServerPage from './pages/Server';

function App() {
  const router = createBrowserRouter([
    { path: '/auth', element: <AuthPage />, action: authAction },
    {
      path: '/',
      element: <LayoutPage />,
      loader: checkAuthLoader,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'live-server', element: <ServerPage /> },
        {
          path: 'peers',
          element: <PeersPage />,
          loader: getPeersLoader,
        },
        {
          path: 'peers/:username',
          element: <ProfilePage />,
          loader: profileLoader,
        },
        {
          path: 'sample',
          element: <Sample />,
          loader: sample,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default memo(App);
