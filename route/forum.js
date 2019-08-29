const express = require("express");
const forumController = require("../controllers/forum");

const route = express.Router();

route.get("/get", forumController.getForum);
route.get("/get/:id", forumController.getForumTopicId);
route.post("/create", forumController.createForum);

module.exports = route;