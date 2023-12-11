import { TaskStatus } from './TaskStatus.js';

// 任務介面型別
export interface Task {
  name: string,
  status: TaskStatus
};