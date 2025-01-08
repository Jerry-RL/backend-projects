export type Task = {
  id: number;
  description: string;
  status: 'todo' | 'in-progress' | 'done';
  createdAt: string;
  updatedAt: string;
};
export type Status = 'todo' | 'in-progress' | 'done';