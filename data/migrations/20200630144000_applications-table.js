exports.up = function (knex) {
  return knex.schema.createTable("applications", (table) => {
    // Primary key
    table.increments();
    // Foreign key referencing user the application belongs to.
    table
      .integer("submitted_by")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users");
    // Company name, required.
    table.string("company_name", 255).notNullable();
    // Company location, required.
    table.string("company_location", 255).notNullable();
    // Company description, not required.
    table.string("company_description", 1000);
    // Application status, required. (Will probably be a dropdown)
    table.string("application_status", 128).notNullable();
    // Timestamp of when application was created.
    table.timestamp("created_at").defaultTo(knex.fn.now());
    // Offer number, not required.
    table.integer("offer");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("applications");
};
