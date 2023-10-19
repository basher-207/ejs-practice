const tasks = [];

exports.renderHomePage = (req, res) => {
    res.render('pages/index', {tasks: tasks});
}

exports.editTaskStatus = (req, res) => {
    if(req.body.done){
        tasks[req.params.taskIndex].checked = true;
    }else{
        tasks[req.params.taskIndex].checked = false;
    }
    res.redirect("/");
}

exports.addNewTask = (req, res) => {
    if(req.body.task){
        tasks.push({
            content: req.body.task,
            checked: false
        });
    }
    res.redirect("/");
}

exports.deleteTask = (req, res) => {
    tasks.splice(req.params.index, 1);
    res.redirect("/");
}

