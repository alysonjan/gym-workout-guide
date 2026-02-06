import React from 'react';

const WeeklyNav = ({ currentDay, setDay }) => {
    const days = [1, 2, 3, 4, 5, 6, 7];

    return (
        <div className="weekly-nav-container">
            <div className="weekly-nav">
                {days.map((day) => (
                    <button
                        key={day}
                        onClick={() => setDay(day)}
                        className={`day-btn ${currentDay === day ? 'active' : ''}`}
                    >
                        <span className="day-label">Day</span>
                        <span className="day-number">{day}</span>
                    </button>
                ))}
            </div>
            <style>{`
        .weekly-nav-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(5, 5, 5, 0.8);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding: 10px 0;
        }
        .weekly-nav {
          display: flex;
          overflow-x: auto;
          gap: 12px;
          padding: 10px 20px;
          scrollbar-width: none; /* Firefox */
        }
        .weekly-nav::-webkit-scrollbar {
          display: none; /* Chrome/Safari */
        }
        .day-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 60px;
          height: 70px;
          border-radius: var(--radius-md);
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: var(--bg-card);
          color: var(--text-secondary);
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          cursor: pointer;
          flex-shrink: 0;
        }
        .day-btn.active {
          background: var(--accent-primary);
          color: #000;
          border-color: var(--accent-primary);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px var(--accent-glow);
        }
        .day-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 4px;
        }
        .day-number {
          font-size: 1.5rem;
          font-weight: 800;
        }
      `}</style>
        </div>
    );
};

export default WeeklyNav;
