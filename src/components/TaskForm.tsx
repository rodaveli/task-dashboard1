import React, { useState } from 'react';
import { Task } from '../types/Task';

interface TaskFormProps {
  addTask: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [recurrence, setRecurrence] = useState(1);
  const [points, setPoints] = useState(1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title) return;
    addTask({ title, recurrence, points });
    setTitle('');
    setRecurrence(1);
    setPoints(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
      />
      <input
        type="number"
        value={recurrence}
        onChange={(e) => setRecurrence(Number(e.target.value))}
        placeholder="Recurrence (days)"
      />
      <select value={points} onChange={(e) => setPoints(Number(e.target.value))}>
        <option value={1}>1 point</option>
        <option value={3}>3 points</option>
        <option value={5}>5 points</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;