/* eslint-disable no-undef */
const express = require("express");

const resources = require("./resource-model");

const router = express.Router();

router.get("/", (req, res) => {
  resources
    .getAllResources()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(() => {
      res.status(500).json({
        message: " Error retrieving the resources"
      });
    });
});
router.post("/", (req, res) => {
    const newResource = req.body;
    resources
      .addResource(newResource)
      .then(resource => {
        res.status(201).json(resource);
      })
      .catch(() => {
        res.status(500).json({
          message: " Error creating this task"
        });
      });
  });
  
  module.exports = router;
  