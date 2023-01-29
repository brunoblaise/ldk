import React, {useEffect, useState} from 'react';
import randomColor from 'randomcolor';
const Boardleader = React.lazy(() => import('../bodyT/Boardleader'));
const Welcome = React.lazy(() => import('../bodyT/Welcome'));
const Track = React.lazy(() => import('../bodyT/Track'));
function Main() {
  const [color, setColor] = useState('');
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setColor(
      randomColor({
        luminosity: 'bright',
        format: 'rgba',
        alpha: 0.2,
        count: 10,

        hue: 'yellow', // e.g. 'rgba(9, 1, 107, 0.5)',
      }),
    );
  }, [count]);
  return (
    <div className='main-panel'>
      <div className='content-wrapper ' style={{backgroundColor: `${color} `}}>
        <Welcome />

        <Track />

        <Boardleader />
      </div>
    </div>
  );
}

export default React.memo(Main);
