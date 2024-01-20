const userService = require('../service/user')


class UserController {
    async createUser(req, res) {
        try {
            const id = await userService.createUser(req.body);
            res.status(201).json(id);
        } catch (err) {
            console.error(err);
            res.status(500).json('something went wrong')
        }
    }

    async getUser(req, res) {
        try {
            const user = await userService.getUser(req.body);
            res.status(200).json(user);
        } catch (err) {
            console.error(err);
            res.status(500).json('something went wrong');
        }
    }

    async getAllUsers(req, res) {
        try {
            const user = await userService.getAllUsers(req.body);
            res.status(200).json(user);
        } catch (err) {
            console.error(err);
            res.status(500).json('something went wrong');
        }
    }

    async updateUser(req, res) {
        try {
            const user = await userService.updateUser(req.body);
            res.status(200).json(user);
        } catch (err) {
            console.error(err);
            res.status(500).json('something went wrong');
        }
    }

    async deleteUser(req, res) {
        try {
            const user = await userService.deleteUser(req.body);
            res.status(200).json(user);
        } catch (err) {
            console.error(err);
            res.status(500).json('something went wrong');
        }
    }
}

module.exports = new UserController();