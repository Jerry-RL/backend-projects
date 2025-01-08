import { readTasks, writeTasks } from '../utils/fileHandler';

export async function deleteTask(id: number) {
  const tasks = await readTasks();
  const filteredTasks = tasks.filter(task => task.id !== id);

  if (tasks.length === filteredTasks.length) {
    console.log(`Task with ID ${id} not found`);
    process.exit(1);
  }

  await writeTasks(filteredTasks);
  console.log(`Task ${id} deleted successfully`);
}