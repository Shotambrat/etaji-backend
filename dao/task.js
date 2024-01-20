const db = require("../db/db");

class TaskDAO {
    async createTask(title, description, deadline, prioritet, status, respons) {
        try {
            const result = await db("task")
            .insert({
                title,
                description,
                deadline,
                prioritet,
                status,
                respons,
            })
            .returning("*");

            return result[0];

        } catch (error) {
            console.error('Error inserting task:', error);
            return {message: "invalid_login"}
        }
    }

    async getAllTasks(respons) {
        const tasks = await db
            .where(respons)
            .select('*')
            .from("task");

        return tasks;
    }

    async updateTask(id, title, description, deadline, prioritet, status, respons) {
        const tasks = await db("task")
            .where({id})
            .update({
                title,
                description,
                deadline,
                prioritet,
                status,
                respons,
            });
    
        return tasks;
    }

    async deleteTask(id) {
        const user = await db("task")
            .where(id)
            .del();
    
        return user;
    }
}

module.exports = new TaskDAO();