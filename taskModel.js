const tasks = [];

exports.getAllTasks = () => {
    return tasks;
}

exports.editTaskStatus = (taskIndex, status) => {
    tasks[taskIndex].done = status;
}

exports.addNewTask = (content) => {
    tasks.push({
        content: content,
        done: false
    });
}

exports.deleteTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
}