const express = require("express");
const app = express();
const ejsLayouts = require("express-ejs-layouts");

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(ejsLayouts);

const tasks = [];

app.get("/", (req, res) => {
    res.render('pages/index', {tasks: tasks});
});
app.post("/checkbox/:taskIndex", (req, res) => {
    if(req.body.done){
        tasks[req.params.taskIndex].checked = true;
    }else{
        tasks[req.params.taskIndex].checked = false;
    }
    res.redirect("/");
});
app.post("/add", (req, res) => { 
    if(req.body.task){
        tasks.push({
            content: req.body.task,
            checked: false
        });
    }
    res.redirect("/");
});
app.post("/delete/:index", (req, res) => {
    tasks.splice(req.params.index, 1);
    res.redirect("/");
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`Server has been started on port: ${PORT}`);
})

module.exports = server;
