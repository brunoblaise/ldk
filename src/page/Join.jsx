import React, {useState} from 'react';

export default function JoinRoom() {
  const [room, setRoom] = useState(null);

  const onSubmit = () => {
    window.location.assign(`/video/${room}`);
  };
  return (
    <div className='main-panel otr'>
      <p>Create a meeting or Join any already existing meeting</p>
      <div class='input-group input-group-sm mb-3'>
        <span class='input-group-text' id='inputGroup-sizing-sm'>
          Meet name
        </span>
        <input
          type='text'
          class='form-control'
          aria-label='Sizing example input'
          aria-describedby='inputGroup-sizing-sm'
          onChange={(e) => setRoom(e.target.value)}
        />
      </div>
      <button onClick={onSubmit} class='btn btn-outline-success'>
        Submit
      </button>
    </div>
  );
}
