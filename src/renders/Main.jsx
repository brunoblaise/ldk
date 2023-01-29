import randomColor from 'randomcolor';
import React, {useState, useEffect} from 'react';

const Welcome = React.lazy(() => import('../body/Welcome'));
const Track = React.lazy(() => import('../body/Track'));
const Boardleader = React.lazy(() => import('../body/Boardleader'));

const Mymarks = React.lazy(() => import('../body/Mymarks'));
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
        luminosity: 'dark',
        format: 'rgba',
        alpha: 0.2,
        count: 10,

        hue: 'orange', // e.g. 'rgba(9, 1, 107, 0.5)',
      }),
    );
  }, [count]);

  return (
    <div className='main-panel'>
      <div className='content-wrapper' style={{backgroundColor: `${color}`}}>
        <Welcome />
        <Track />

        <Boardleader />
        <Mymarks />
      </div>
    </div>
  );
}

export default React.memo(Main);
