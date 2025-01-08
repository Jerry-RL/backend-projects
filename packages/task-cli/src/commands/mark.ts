import { readTasks, writeTasks } from '../utils/fileHandler';

type Status = 'todo' | 'in-progress' | 'done';

export async function markTask(id: number, status: Status) {
  const tasks = await readTasks();
  const taskIndex = tasks.findIndex(task => task.id === id);

  if (taskIndex === -1) {
    console.log(`Task with ID ${id} not found`);
    process.exit(1);
  }

  tasks[taskIndex] = {
    ...tasks[taskIndex],
    status,
    updatedAt: new Date().toISOString()
  };

  await writeTasks(tasks);
  console.log(`Task ${id} marked as ${status}`);
}