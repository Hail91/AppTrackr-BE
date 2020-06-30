exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    // Primary key
    table.increments();
    // Username, must be unique and is required.
    table.string("username", 128).notNullable().unique();
    // Password, is required.
    table.string("password", 128).notNullable();
    // User's name, is required.
    table.string("name", 128).notNullable();
    // User location, not required
    table.string("location", 255);
    // User Job title, not required
    table.string("job title", 255);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
