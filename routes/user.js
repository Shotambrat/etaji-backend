const express = require("express");
const db = require("../db/db.js");
const userController = require('../controller/user.js');
const taskController = require('../controller/task.js');

const router = express.Router();

router.get('/api/users', userController.getAllUsers);
router.get('/api/user', userController.getUser);
router.post('/api/user', userController.createUser);
router.put('/api/user', userController.updateUser);
router.delete('/api/user', userController.deleteUser);

router.get('/api/tasks', taskController.getAllTasks);
router.post('/api/task', taskController.createTask);
router.put('/api/task', taskController.updateTask);
router.delete('/api/task/:id', taskController.deleteTask);

module.exports = router;