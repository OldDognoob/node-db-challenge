/* eslint-disable no-undef */

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects").del()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          project_name: "Project 1",
          project_description: "Complete projects MVP requirements",
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
