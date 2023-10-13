"use client";

import React, { useState } from 'react';

function WorkReportForm() {
  const [selectedWeek, setSelectedWeek] = useState<string>('');
  const [hoursWorked, setHoursWorked] = useState<number[]>([0, 0, 0, 0, 0]);
  const [tasks, setTasks] = useState<string[]>(['', '', '', '', '']);

  const handleWeekChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedWeek(event.target.value);
  };

  const handleHoursChange = (event: React.ChangeEvent<HTMLInputElement>, dayIndex: number) => {
    const newHoursWorked = [...hoursWorked];
    newHoursWorked[dayIndex] = parseInt(event.target.value, 10);
    setHoursWorked(newHoursWorked);
  };

  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>, dayIndex: number) => {
    const newTasks = [...tasks];
    newTasks[dayIndex] = event.target.value;
    setTasks(newTasks);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to the server
  };

  return (
    <div>
      <h1>Ausbildungsnachweise</h1>
      <p>Date: {selectedWeek}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Select Week:
          <select value={selectedWeek} onChange={handleWeekChange}>
            <option value="Week 1">Week 1</option>
            <option value="Week 2">Week 2</option>
            {/* Add more weeks here */}
          </select>
        </label>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Hours Worked</th>
              <th>Task</th>
            </tr>
          </thead>
          <tbody>
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, index) => (
              <tr key={day}>
                <td>{day}</td>
                <td>
                  <input
                    type="number"
                    value={hoursWorked[index]}
                    onChange={(e) => handleHoursChange(e, index)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={tasks[index]}
                    onChange={(e) => handleTaskChange(e, index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="submit">Bericht schließen</button>
      </form>
    </div>
  );
}

export default WorkReportForm;
