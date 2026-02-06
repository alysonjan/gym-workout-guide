import React, { useState } from 'react';

const DailyWorkout = ({ dayData, dayNumber }) => {
  const [selectedExercise, setSelectedExercise] = useState(null);

  if (!dayData) return <div className="p-4 text-center">Rest Day or No Data</div>;

  return (
    <div className="daily-workout">
      <header className="day-header">
        <h1>Day {dayNumber}</h1>
        <p className="subtitle">{dayData.title}</p>
      </header>

      <div className="exercise-list">
        {dayData.exercises.map((exercise, index) => (
          <div
            key={exercise.id}
            className={`exercise-card glass-panel ${selectedExercise === exercise.id ? 'expanded' : ''}`}
            onClick={() => setSelectedExercise(selectedExercise === exercise.id ? null : exercise.id)}
          >
            <div className="card-header">
              <div className="exercise-number">{index + 1}</div>
              <div className="exercise-info">
                <h3>{exercise.name}</h3>
                <div className="exercise-meta">
                  <span className="badge sets">{exercise.sets} Sets</span>
                  <span className="badge reps">{exercise.reps} Reps</span>
                </div>
              </div>
            </div>

            {/* Expanded Content (Form Guide) */}
            {selectedExercise === exercise.id && (
              <div className="form-guide-container">
                <div className="divider"></div>
                <div className="tips-section">
                  <h4>Pro Tips</h4>
                  <p>{exercise.tips}</p>
                </div>
                {/* Placeholder for future GIF/Image */}
                <div className="action-container">
                  <a
                    href={`https://www.youtube.com/results?search_query=${encodeURIComponent(exercise.name + " proper form")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-youtube"
                  >
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    Watch Demo on YouTube
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <style>{`
        .daily-workout {
          padding: 120px 20px 40px; /* Top padding for fixed nav */
        }
        .day-header {
          margin-bottom: 30px;
        }
        .subtitle {
          color: var(--accent-primary);
          font-size: 1.1rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 5px;
        }
        .exercise-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .exercise-card {
          border-radius: var(--radius-lg);
          padding: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
          position: relative;
        }
        .exercise-card:active {
          transform: scale(0.98);
        }
        .card-header {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .exercise-number {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.9rem;
        }
        .exercise-info h3 {
          font-size: 1.1rem;
          margin-bottom: 6px;
          color: var(--text-primary);
        }
        .exercise-meta {
          display: flex;
          gap: 8px;
        }
        .badge {
          font-size: 0.75rem;
          padding: 4px 8px;
          border-radius: 6px;
          font-weight: 600;
        }
        .badge.sets {
          background: rgba(41, 216, 255, 0.1);
          color: var(--accent-primary);
        }
        .badge.reps {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-secondary);
        }
        
        /* Expanded States */
        .divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
          margin: 15px 0;
        }
        .tips-section h4 {
          color: var(--accent-primary);
          font-size: 0.9rem;
          margin-bottom: 4px;
        }
        .tips-section p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.5;
        }
        
        /* YouTube Button */
        .action-container {
          margin-top: 20px;
        }
        .btn-youtube {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 12px;
          background: #FF0000;
          color: white;
          border-radius: var(--radius-md);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 4px 15px rgba(255, 0, 0, 0.3);
        }
        .btn-youtube:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 0, 0, 0.4);
        }
        .btn-youtube:active {
          transform: translateY(0);
        }
        
        .form-guide-container {
          animation: slideDown 0.3s ease-out;
        }
        
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default DailyWorkout;
