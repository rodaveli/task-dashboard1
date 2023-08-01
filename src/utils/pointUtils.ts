```typescript
import { Task } from '../types/Task';

export const calculatePoints = (tasks: Task[]): number => {
  let points = 0;
  tasks.forEach(task => {
    if (task.completed) {
      points += task.points;
    } else {
      points -= task.points;
    }
  });
  return points;
};

export const calculateStreakPoints = (streak: number): number => {
  return streak;
};

export const calculateTotalPoints = (tasks: Task[], streak: number): number => {
  const taskPoints = calculatePoints(tasks);
  const streakPoints = calculateStreakPoints(streak);
  return taskPoints + streakPoints;
};
```