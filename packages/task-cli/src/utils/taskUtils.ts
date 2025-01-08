import { Task } from './fileHandler';

export function validateTask(task: Task | undefined, id: number): void {
  if (!task) {
    console.log(`Task with ID ${id} not found`);
    process.exit(1);
  }
}

export function printTask(task: Task): void {
  console.log(`
ID: ${task.id}
Description: ${task.description}
Status: ${task.status}
Created: ${new Date(task.createdAt).toLocaleString()}
Updated: ${new Date(task.updatedAt).toLocaleString()}
  `);
}