import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className='joinOuterContainer'>
      <div className='joinInnerContainer'>
        <h1 className='heading'>Join</h1>
        <div>
          <input
            type='text'
            placeholder='Name'
            className='joinInput'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type='text'
            placeholder='Room'
            className='joinInput mt-20'
            value={room}
            onChange={e => setRoom(e.target.value)}
          />
        </div>
        <Link to={`/chat?name=${name}&room=${room}`}>
          <button
            className='button mt-20'
            type='submit'
            disabled={!name || !room}
          >
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
