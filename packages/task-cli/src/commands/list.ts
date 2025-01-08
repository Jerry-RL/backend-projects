import { readTasks } from '../utils/fileHandler';
import { Task, Status } from '../types';

export async function listTasks(status?: Status) {
  const tasks = await readTasks();
  const filteredTasks = status ? tasks.filter(task => task.status === status) : tasks;

  if (filteredTasks.length === 0) {
    console.log('No tasks found');
    return;
  }

  filteredTasks.forEach(task => {
    console.log(`
ID: ${task.id}
Description: ${task.description}
Status: ${task.status}
Created: ${new Date(task.createdAt).toLocaleString()}
Updated: ${new Date(task.updatedAt).toLocaleString()}
    `);
  });
}