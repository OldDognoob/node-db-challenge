/* eslint-disable no-undef */
const db = require("../data/dbConfig");

function getAllResources() {
  return db("resources");
}

function addResource(resource) {
  return db("resources").insert(resource);
}

module.exports = {
  getAllResources,
  addResource
};