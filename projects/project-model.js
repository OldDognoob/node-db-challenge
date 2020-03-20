/* eslint-disable no-undef */
//import database config
const db = require("../data/dbConfig.js");

//DB helpers
function getAllProjects() {
  return db("projects");
}
function getAllProjectById(id) {
  return db("projects")
    .where({ id })
    .first();
}
function addProject(project) {
  return db("projects").insert(project);
}
function getAllTasks(project_id) {
  return db("tasks")
    .join("projects", "tasks.project_id", "projects.id")
    .select("tasks.task_description", "projects.project_name", "tasks.complete")
    .where({ project_id });
}
function addTask(id, task) {
  return db("tasks").insert({ ...task, project_id: id });
}
function getAllProjectsResources(id) {
  return db("projects as p")
    .join("projects_resources as pr", "p.id", "pr.project_id")
    .join("resources as r", "r.id", "pr.resource_id")
    .select("p.project_name", "r.resource_name", "r.resource_description")
    .where("p.id", id);
}
module.exports = {
  getAllProjects,
  getAllProjectById,
  addProject,
  getAllTasks,
  addTask,
  getAllProjectsResources
};
