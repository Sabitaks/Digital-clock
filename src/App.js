import React, { useState } from 'react';
import './App.css';

const DgitalClock = () => {
  let time = new Date().toLocaleTimeString();
    
  const [ctime, setCtime] = useState(time)

  const UpdateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(UpdateTime, 1000);
  return (
    <>
      <div className='digitalC'>
      <h1>{time }</h1>
      <button onClick={UpdateTime}>DIGITAL-CLOCK</button>
      </div>
    </>
  )
};
export default DgitalClock;
