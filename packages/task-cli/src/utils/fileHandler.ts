

import { Task } from '../types'; // Assuming you have a Task type
import fs from 'fs/promises';
import path from 'path';

const filePath = path.join(__dirname, '../../data/tasks.json');
export type { Task } from '../types'; 
export async function readTasks(): Promise<Task[]> {
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}

export async function writeTasks(tasks: Task[]): Promise<void> {
  await fs.writeFile(filePath, JSON.stringify(tasks, null, 2));
}