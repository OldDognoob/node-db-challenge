
exports.seed = function(knex) {
  return knex("projects")
    .del()
    .then(function() {
      return knex("projects").insert([
        {
          project_name: "Project 1",
          project_description: "Finish projects MVP requirements",
          complete: false
        },
        {
          project_name: "Project 2",
          project_description: "Pass the spring challenge project",
          complete: false
        }
      ]);
    });
};