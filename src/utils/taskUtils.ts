import { Task } from '../types/Task';

export const calculatePoints = (task: Task): number => {
  let points = 0;
  switch (task.difficulty) {
    case 'easy':
      points = 1;
      break;
    case 'medium':
      points = 3;
      break;
    case 'hard':
      points = 5;
      break;
    default:
      break;
  }
  return points;
};

export const isTaskDue = (task: Task): boolean => {
  const currentDate = new Date();
  const dueDate = new Date(task.dueDate);
  return currentDate >= dueDate;
};

export const calculatePenalty = (task: Task): number => {
  return isTaskDue(task) ? calculatePoints(task) : 0;
};

export const calculateStreak = (tasks: Task[], currentDate: Date): number => {
  let streak = 0;
  const sortedTasks = tasks.sort((a, b) => a.dueDate.localeCompare(b.dueDate));
  for (let i = 0; i < sortedTasks.length; i++) {
    if (new Date(sortedTasks[i].dueDate) <= currentDate) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
};