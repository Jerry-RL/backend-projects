#!/usr/bin/env node
import { addTask } from './commands/add';
import { updateTask } from './commands/update';
import { deleteTask } from './commands/delete';
import { markTask } from './commands/mark';
import { listTasks } from './commands/list';

const [command, ...args] = process.argv.slice(2);

switch (command) {
  case 'add':
    addTask(args[0]);
    break;
  case 'update':
    updateTask(Number(args[0]), args[1]);
    break;
  case 'delete':
    deleteTask(Number(args[0]));
    break;
  case 'mark-in-progress':
  case 'mark-done':
    markTask(Number(args[0]), command.split('-')[1] as 'in-progress' | 'done');
    break;
  case 'list':
    listTasks(args[0] as 'todo' | 'in-progress' | 'done' | undefined);
    break;
  default:
    console.log('Invalid command');
    process.exit(1);
}