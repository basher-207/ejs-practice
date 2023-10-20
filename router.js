const express = require('express');
const taskController = require("./taskController.js");

const router = express.Router();

router.get("/", taskController.getTasks);
router.post("/checkbox/:taskIndex", taskController.editTaskStatus);
router.post("/add", taskController.addNewTask);
router.post("/delete/:index", taskController.deleteTask);

module.exports = router;