import React, { useEffect, useState } from 'react';
import { Task } from '../types/Task';
import TaskComponent from './Task';
import '../styles/TaskGrid.css';

interface TaskGridProps {
  tasks: Task[];
  onTaskComplete: (task: Task) => void;
}

const TaskGrid: React.FC<TaskGridProps> = ({ tasks, onTaskComplete }) => {
  const [gridTasks, setGridTasks] = useState<Task[]>([]);

  useEffect(() => {
    setGridTasks(tasks);
  }, [tasks]);

  return (
    <div className="task-grid">
      {gridTasks.map((task, index) => (
        <TaskComponent key={index} task={task} onComplete={onTaskComplete} />
      ))}
    </div>
  );
};

export default TaskGrid;