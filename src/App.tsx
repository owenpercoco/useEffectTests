import React, { useState } from 'react';
import logo from './logo.svg';
import RenderCounter from './components/renderCounter';
import TimerMount from './components/timerMount';
import MemoryLeaker from './components/memoryleaker';
import './App.css';

function App() {
  const [renderTimer, setRenderTimer] = useState(false)
  const [renderBadTimer, setRenderBadTimer] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <span>A little thing to demonstrate when, and when not, to use UseEffect</span>
      </header>
      <p>Lets run through some places you can use UseEffect:</p>
      <ul>
        <li>
          Often times its better to use UseMemo, which doesnt strictly run on every render.  
          UseMemo only runs when the dependencies change, lets work up an example for this.
        </li>
        <li onClick={() => setRenderTimer(!renderTimer)}>
          Sometimes UseEffect Cleanup functions get a little hairy. Click here to demonstrate a cleanup function.
        </li>
        <li onClick={() => setRenderBadTimer(!renderBadTimer)}>
          Sometimes UseEffect Cleanup functions get a little hairy.  Click here to demonstrate a timer without a cleanup!
        </li>
      </ul>
      <div className="render-counter-container">
        <RenderCounter/>
      </div>
      {renderTimer &&
        <div className="timer-mount-container">
          <TimerMount/>
        </div>
      }
      {renderBadTimer &&
        <div className="timer-mount-container">
          <MemoryLeaker/>
        </div>
      }
    </div>
  );
}

export default App;
