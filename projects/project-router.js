const express = require("express");

const projects = require("./project-model");

const router = express.Router();

router.get("/", (req, res) => {
  projects
    .getAllProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json({
        message: "An error occur retrieving the projects"
      });
    });
});
router.get("/:id", (req, res) => {
  const { id } = req.params;
  projects
    .getAllProjectById(id)
    .then(project => {
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({
          message: "There is no project with this id"
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "There was an error retrieving this project"
      });
    });
});
router.post("/", (req, res) => {
  const newProject = req.body;
  projects
    .addProject(newProject)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(error => {
      res.status(500).json({
        message: "An error occur creating this project"
      });
    });
});
router.get("/:id/tasks", (req, res) => {
  const { id } = req.params;
  projects
    .getAllTasks(id)
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(error => {
      res.status(500).json({
        message: "There was an error retrieving the tasks"
      });
    });
});
router.post("/:id/tasks", (req, res) => {
  const { id } = req.params;
  const newTask = req.body;
  projects
    .addTask(id, newTask)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(error => {
      res.status(500).json({
        message: "Error creating this task"
      });
    });
});
router.get("/:id/resources", (req, res) => {
  const { id } = req.params;
  projects
    .getAllProjectsResources(id)
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(error => {
      res.status(500).json({
        message: " Error retrieving this projects resources"
      });
    });
});

module.exports = router;
