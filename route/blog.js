const express = require("express");
const blogController = require("../controllers/blog");

const route = express.Router();

route.get("/get", blogController.getBlog);
route.get("/get/:id",blogController.getBlogTopicId);
route.post("/create", blogController.createBlog);

module.exports = route;