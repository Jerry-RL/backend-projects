import { readTasks, writeTasks } from '../utils/fileHandler';

export async function updateTask(id: number, description: string) {
  if (!description) {
    console.log('Description is required');
    process.exit(1);
  }

  const tasks = await readTasks();
  const taskIndex = tasks.findIndex(task => task.id === id);

  if (taskIndex === -1) {
    console.log(`Task with ID ${id} not found`);
    process.exit(1);
  }

  tasks[taskIndex] = {
    ...tasks[taskIndex],
    description,
    updatedAt: new Date().toISOString()
  };

  await writeTasks(tasks);
  console.log(`Task ${id} updated successfully`);
}