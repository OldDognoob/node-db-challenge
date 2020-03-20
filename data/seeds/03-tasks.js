/* eslint-disable no-undef */

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks").del()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          task_description: "Task1",
          notes: "Be careful",
          complete: false,
          project_id: 1
        },
        {
          task_description: "Task2",
          notes: "Try not repeat yourself",
          complete: false,
          project_id: 1
        },
        {
          task_description: "Task3",
          notes: "Don't rush, take your time",
          complete: false,
          project_id: 1
        },
        {
          task_description: "Task1",
          notes: "Dominus Vobiscum",
          complete: false,
          project_id: 2
        },
        {
          task_description: "Task2",
          notes: "Be ready to face eternity",
          complete: false,
          project_id: 2
        },
        {
          task_description: "Task3",
          notes: "Relax, its your time to shine",
          complete: false,
          project_id: 2
        }
      ]);
    });
};
