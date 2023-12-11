"use strict";
;
// 任務列舉
var TaskStatus;
(function (TaskStatus) {
    TaskStatus[TaskStatus["Todo"] = 0] = "Todo";
    TaskStatus[TaskStatus["InProgress"] = 1] = "InProgress";
    TaskStatus[TaskStatus["Done"] = 2] = "Done";
})(TaskStatus || (TaskStatus = {}));
;
// 空陣列
let tasks = [];
// 點擊增加任務按鈕
document.querySelector('.addTask').addEventListener('click', () => {
    const taskNameInput = document.querySelector('.taskName');
    const taskContent = taskNameInput.value;
    const taskItem = {
        name: taskContent,
        status: TaskStatus.Todo
    };
    createTask(taskItem);
});
// 新增陣列
function createTask(task) {
    tasks.push(task);
    updateTaskList();
}
;
// 渲染 list
function updateTaskList() {
    let taskContent = '';
    tasks.forEach(task => {
        taskContent += `<li>${task.name} - 狀態：${TaskStatus[task.status]}</li>`;
    });
    document.querySelector('.taskList').innerHTML = taskContent;
}
;
