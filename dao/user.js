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
        .where({ login: login });

    if (user) {
        const isPasswordValid = await bcrypt.compare(password, user[0].password_hash);
        console.log(isPasswordValid);
        console.log(user[0].password_hash);
    
        if (isPasswordValid) {
            return user;
        } else {
            throw new Error("Invalid password")
        }
    }

    throw new Error("Invalid user")
  }

  async getAllUsers() {
    const users = await db.select("*").from("user").whereNot({"rank": "boss"});

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

  async deleteUser(login) {
    await db.transaction(async trx => {
      await trx("task")
        .where("respons", login)
        .del();
      await trx("user")
        .where("login", login)
        .del();
    });
  
    return { success: true };
  }
}

module.exports = new UserDAO();
