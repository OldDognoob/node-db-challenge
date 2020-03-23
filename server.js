/* eslint-disable no-undef */
//Import libraries
const express = require("express");

//Import routes
const ProjectRouter =require("./projects/project-router");
const ResourceRouter=require("./resources/resource-router");

//Activate imports
const server = express();

//Inject import functionality
server.use(express.json());

//Declare server use routing
server.use("/api/projects", ProjectRouter);
server.use("/api/resources",ResourceRouter);//resources plural

module.exports = server;
