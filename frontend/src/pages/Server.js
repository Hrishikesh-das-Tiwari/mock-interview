import { useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5003');

function ServerPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [matchedUser, setMatchedUser] = useState(null);

  const handleSearch = () => {
    socket.emit('search', searchQuery);

    socket.on('matched', ({ socketId }) => {
      setMatchedUser(socketId);
    });
  };

  return (
    <div>
      {matchedUser ? (
        <div>
          You have been matched with another user! Your socket ID is{' '}
          {matchedUser}.
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      )}
    </div>
  );
}

export default ServerPage;
