const db = require("../db/db");
const bcrypt = require('bcrypt');

class UserDAO {
  async createUser(first_name, last_name, middle_name, login, password, rank) {
    const password_hash = await bcrypt.hash(password, 10);
    const [id] = await db("user")
      .insert({
        first_name,
        last_name,
        middle_name,
        login,
        password_hash,
        rank,
      })
      .returning("id");

      return id;
  }

  async getUser(login, password) {
    const user = await db("user")
        .where({login});

    if (user) {
        const isPasswordValid = await bcrypt.compare(password, user[0].password_hash);
    
        if (isPasswordValid) {
            return user;
        } else {
            return {message: "wrong_password"}
        }
    }

    return user;
  }

  async getAllUsers() {
    const users = await db.select("*").from("user");

    return users;
  }

  async updateUser(id, first_name, last_name, middle_name, login, password, rank) {
    const password_hash = await bcrypt.hash(password, 10);
    const user = await db("user")
        .where({id})
        .update({
            first_name,
            last_name,
            middle_name,
            login,
            password_hash,
            rank,
        });

    return user;
  }

  async deleteUser(id) {
    const user = await db("user")
        .where(id)
        .del();

    return user;
  }
}

module.exports = new UserDAO();
