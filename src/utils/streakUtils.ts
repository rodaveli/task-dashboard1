import { User } from '../types/User';
import { Task } from '../types/Task';
import { isWeekend } from './dateUtils';

export const calculateStreak = (user: User, tasks: Task[]): number => {
  let streak = user.streak;
  const today = new Date();
  const completedTasksToday = tasks.filter(task => 
    new Date(task.completedAt).toDateString() === today.toDateString()
  ).length;

  if (completedTasksToday >= 2 && !isWeekend(today)) {
    streak++;
  }

  return streak;
};

export const calculatePoints = (user: User, tasks: Task[]): number => {
  let points = user.points;
  const today = new Date();
  const completedTasksToday = tasks.filter(task => 
    new Date(task.completedAt).toDateString() === today.toDateString()
  );

  completedTasksToday.forEach(task => {
    points += task.points;
  });

  if (calculateStreak(user, tasks) > user.streak) {
    points++;
  }

  return points;
};

export const calculatePenalty = (user: User, tasks: Task[]): number => {
  let penalty = 0;
  const today = new Date();
  const incompleteTasks = tasks.filter(task => 
    new Date(task.dueDate) < today && !task.completedAt
  );

  incompleteTasks.forEach(() => {
    penalty--;
  });

  return penalty;
};