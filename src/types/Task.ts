export interface Task {
  id: string;
  title: string;
  points: 1 | 3 | 5;
  recurrence: number;
  dueDate: Date;
  completed: boolean;
}