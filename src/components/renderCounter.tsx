import React, { useState, useMemo, useEffect } from 'react';

const RenderCounter = () => {
  const [count, setCount] = useState(0);
  const [effectRenderCount, setEffectRenderCount] = useState(0);
  const [memoRenderCount, setMemoRenderCount] = useState(0);

  // useEffect to count renders
  useEffect(() => setEffectRenderCount((prev) => prev + 1), [count]);

  // useMemo to count renders
  const memoizedValue = useMemo(() => {
    setMemoRenderCount((prev) => prev + 1);
    return count * 2; // lets pretend this is really really expensive
  }, [count]);

  return (
    <div>
      <h1>Render Counter</h1>
      <p>Count: {count}</p>
      <p>CPU Expensive Memoized Value: {memoizedValue}</p>
      <p>Effect Render Count: {effectRenderCount}</p>
      <p>Memo Render Count: {memoRenderCount}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default RenderCounter;
