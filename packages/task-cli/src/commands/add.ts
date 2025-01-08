import { readTasks, writeTasks } from '../utils/fileHandler';

export async function addTask(description: string) {
  const tasks = await readTasks();
  const newTask = {
    id: tasks.length + 1,
    description,
    status: 'todo' as const,  // Add type assertion
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  tasks.push(newTask);
  await writeTasks(tasks);
  console.log(`Task added with ID: ${newTask.id}`);
}