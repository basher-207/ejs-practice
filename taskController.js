const taskModel = require("./taskModel.js");

exports.getTasks = (req, res) => {
    const tasks = taskModel.getAllTasks();
    res.render('pages/index', {tasks: tasks});
}

exports.editTaskStatus = (req, res) => {
    req.body.done ? 
    taskModel.editTaskStatus(req.params.taskIndex, true) :
    taskModel.editTaskStatus(req.params.taskIndex, false)

    res.redirect("/");
}

exports.addNewTask = (req, res) => {
    if(req.body.task){
        taskModel.addNewTask(req.body.task);
    }
    res.redirect("/");
}

exports.deleteTask = (req, res) => {
    taskModel.deleteTask(req.params.index);
    res.redirect("/");
}

