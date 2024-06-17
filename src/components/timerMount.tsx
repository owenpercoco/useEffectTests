import React, { useEffect, useState } from 'react';

const TimerMount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(timer);
    };
  }, []); 

  return (
    <div>
      <h1>Cleanup Function Timer: {count}</h1>
    </div>
  );
};

export default TimerMount;
