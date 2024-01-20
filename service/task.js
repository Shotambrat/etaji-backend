const taskDAO = require('../dao/task');


class TaskService {
    createTask (taskdata) {
        const {title, description, deadline, prioritet, status, respons} = taskdata;
        return taskDAO.createTask(title, description, deadline, prioritet, status, respons);
    }

    getAllTasks(respons) {
        return taskDAO.getAllTasks(respons);
    }

    updateTask(taskdata) {
        const {id, title, description, deadline, prioritet, status, respons} = taskdata;
        return taskDAO.updateTask(id, title, description, deadline, prioritet, status, respons);
    }

    deleteTask(id) {
        return taskDAO.deleteTask(id);
    }
}

module.exports = new TaskService();