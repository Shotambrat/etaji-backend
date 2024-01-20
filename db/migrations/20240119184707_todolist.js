/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable("user", (table) => {
            table.increments("id").primary();
            table.string("first_name").notNullable();
            table.string("last_name").notNullable();
            table.string("middle_name").notNullable();
            table.string("login").notNullable().unique();
            table.string("password_hash").notNullable();
            table.string("rank").notNullable();
            table.timestamps(true, true);
        })
        .createTable("task", (table) => {
            table.increments("id").primary();
            table.string("title", 255).notNullable();
            table.string("description", 1000).notNullable();
            table.string("deadline").notNullable();
            // table.string("created_at").notNullable();
            // table.string("updated_at").notNullable();
            table.string("prioritet").notNullable();
            table.string("status").notNullable();
            table.string("respons").unsigned().references("login").inTable("user");
            table.timestamps(true, true);
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists("user");
};