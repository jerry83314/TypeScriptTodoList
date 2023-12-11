import { TaskStatus } from "./types/TaskStatus.js";
import { Task } from './types/Task.js';

// 空陣列
let tasks: Task[] = [];

// 點擊增加任務按鈕
document.querySelector('.addTask')!.addEventListener('click', () => {
  const taskNameInput = document.querySelector('.taskName') as HTMLInputElement;
  const taskContent = taskNameInput.value;
  const taskItem: Task = {
    name: taskContent,
    status: TaskStatus.Todo
  };
  createTask(taskItem);
});

// 新增陣列
function createTask(task: Task) {
  tasks.push(task);
  updateTaskList();
};

// 渲染 list
function updateTaskList() {
  let taskContent = '';
  tasks.forEach(task => {
    taskContent += `<li>${task.name} - 狀態：${TaskStatus[task.status]}</li>`
  });
  document.querySelector('.taskList')!.innerHTML = taskContent;
};