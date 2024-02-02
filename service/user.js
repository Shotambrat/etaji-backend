const userDAO = require('../dao/user')


class UserService {
    createUser(userdata) {
        const {first_name, last_name, middle_name, login, password, rank} = userdata;
        return userDAO.createUser(first_name, last_name, middle_name, login, password, rank);
    }

    getUser(data) {
        const {login, password} = data;
        return userDAO.getUser(login, password);
    }

    getAllUsers() {
        return userDAO.getAllUsers();
    }

    updateUser(userdata) {
        const {id, first_name, last_name, middle_name, login, password, rank} = userdata;
        return userDAO.updateUser(id, first_name, last_name, middle_name, login, password, rank);
    }

    deleteUser(id) {
        console.log("Del ID", id)
        return userDAO.deleteUser({id: id});
    }
}



module.exports = new UserService();
