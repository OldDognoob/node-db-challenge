exports.up = function(knex) {
  return knex.schema
    .createTable("projects", table => {
      table.increments(); //increments(); plural
      table.text("project_name", 128).notNullable();
      table.text("project_description");
      table.boolean("complete").defaultTo(false);
    })
    .createTable("resources", table => {
      table.increments(); //increments(); plural
      table
        .text("resource_name", 128)
        .unique()
        .notNullable();
      table.text("resource_description");
    })
    .createTable("tasks", table => {
      table.increments(); //increments(); plural
      table.text("task_description").notNullable();
      table.text("notes");
      table.boolean("complete").defaultTo(false);
      table
        .integer("project_id")
        .notNullable()
        .references("id")
        .inTable("projects");
    })
    .createTable("projects_resources", table => {
      table.increments(); //increments(); plural
      table
        .integer("project_id")
        .notNullable()
        .references("id")
        .inTable("projects");
      table
        .integer("resource_id")
        .notNullable()
        .references("id")
        .inTable("resources");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
