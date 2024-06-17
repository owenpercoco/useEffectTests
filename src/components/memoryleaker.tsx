import React, { useEffect, useState } from 'react';

const MemoryLeaker = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  }, []); // no clean up array!

  return (
    <div>
      <h1>Timer With Memory Leak: {count}</h1>
    </div>
  );
};

export default MemoryLeaker;
