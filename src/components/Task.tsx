import React from 'react';
import { Task as TaskType } from '../types/Task';
import '../styles/Task.css';

interface TaskProps {
  task: TaskType;
  onComplete: (task: TaskType) => void;
  onFail: (task: TaskType) => void;
}

const Task: React.FC<TaskProps> = ({ task, onComplete, onFail }) => {
  return (
    <div className="task">
      <h3>{task.title}</h3>
      <p>Points: {task.points}</p>
      <p>Recurring every: {task.recurringDays} days</p>
      <button onClick={() => onComplete(task)}>Complete Task</button>
      <button onClick={() => onFail(task)}>Fail Task</button>
    </div>
  );
};

export default Task;