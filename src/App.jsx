import React, { useState, useEffect } from 'react';
import WeeklyNav from './components/WeeklyNav';
import DailyWorkout from './components/DailyWorkout';
import { routine } from './data/routine';

function App() {
  // Try to load saved day, or default to 1
  const savedDay = localStorage.getItem('currentDay');
  const [currentDay, setCurrentDay] = useState(savedDay ? parseInt(savedDay) : 1);

  // Save day whenever it changes
  useEffect(() => {
    localStorage.setItem('currentDay', currentDay);
  }, [currentDay]);

  return (
    <div className="App">
      <WeeklyNav currentDay={currentDay} setDay={setCurrentDay} />

      <main>
        <DailyWorkout
          dayNumber={currentDay}
          dayData={routine[currentDay]}
        />
      </main>

      {/* Simple animated background element */}
      <div className="glow-orb"></div>

      <style>{`
        .glow-orb {
          position: fixed;
          top: 10%;
          right: -100px;
          width: 300px;
          height: 300px;
          background: var(--accent-primary);
          filter: blur(120px);
          opacity: 0.15;
          z-index: -1;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}

export default App;
