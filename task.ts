// 任務介面型別
interface Task {
  name: string
};

// 任務列舉
enum TaskStatus {
  Todo,
  InProgress,
  Done
};

// 空陣列
let tasks: Task[] = [];