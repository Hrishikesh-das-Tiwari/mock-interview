import axios from 'axios';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import {
  useLoaderData,
  json,
  defer,
  Await,
  Link,
  redirect,
} from 'react-router-dom';
import PeerCard from '../components/PeerCard';
import BufferIcon from '../components/ui/BufferIcon';
import hasAuthToken from '../util/auth';
import { protectLoader, ProtectLoader } from '../util/loaderChecks';

function PeersPage() {
  const { peers } = useLoaderData();

  return (
    <main className="main" style={{ width: '100%' }}>
      <Link to="/">Home</Link>
      <Suspense fallback={<BufferIcon />}>
        <div className="container text-center ">
          <div className="row mx-auto ">
            <Await resolve={peers}>
              {(loadedTours) =>
                loadedTours.map((peer, ind) => (
                  <PeerCard peer={peer} key={ind} />
                ))
              }
            </Await>
          </div>
        </div>
      </Suspense>
    </main>
  );
}

async function loadTours() {
  // await protectLoader();
  try {
    const response = await axios.get('http://localhost:5001/peers', {
      withCredentials: true,
    });
    const { peers } = response.data;

    return peers;
  } catch (error) {
    throw json({ message: error.message }, { status: 500 });
  }
}

export function loader() {
  const token = hasAuthToken();
  if (!token) {
    return redirect('/auth');
  }

  return defer({
    peers: loadTours(),
  });
}

export default PeersPage;
