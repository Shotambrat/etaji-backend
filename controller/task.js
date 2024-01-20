const taskService = require('../service/task');

class TaskController {
    async createTask(req, res) {
        try {
            const id = await taskService.createTask(req.body);
            res.status(201).json(id);
        } catch (err) {
            console.error(err);
            res.status(500).json('something went wrong')
        }
    }

    async getAllTasks(req, res) {
        try {
            const task = await taskService.getAllTasks(req.body);
            res.status(200).json(task);
        } catch (err) {
            console.error(err);
            res.status(500).json('something went wrong');
        }
    }

    async updateTask(req, res) {
        try {
            const task = await taskService.updateTask(req.body);
            res.status(200).json(task);
        } catch (err) {
            console.error(err);
            res.status(500).json('something went wrong');
        }
    }

    async deleteTask(req, res) {
        try {
            const task = await taskService.deleteTask(req.body);
            res.status(200).json(task);
        } catch (err) {
            console.error(err);
            res.status(500).json('something went wrong');
        }
    }
}

module.exports = new TaskController();