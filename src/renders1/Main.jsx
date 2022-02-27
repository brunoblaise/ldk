import React from 'react';

const GetLink = React.lazy(() => import('../bodyT/GetLink'));

const Boardleader = React.lazy(() => import('../bodyT/Boardleader'));
const Welcome = React.lazy(() => import('../bodyT/Welcome'));
const Track = React.lazy(() => import('../bodyT/Track'));
function Main() {
  return (
    <div className='main-panel'>
      <div className='content-wrapper aerq'>
        <Welcome />

        <Track />

        <Boardleader />
        <GetLink />
      </div>
    </div>
  );
}

export default React.memo(Main);
