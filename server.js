// allows our project read variables from .env files
require("dotenv").config();  

const express = require("express");
const sequelize = require("./config/database");

// Enables Cross Origin Resource Sharing for our Project
const cors = require("cors");

//importing routes
const prayerRoutes = require("./route/prayer");
const forumRoutes = require("./route/forum");

const app = express();

// This parses all json request so we can access
// its contents via 'req.body' object
app.use(express.json());
app.use(cors());


//setting a base path
app.use("/api/prayer", prayerRoutes);
app.use("/api/forum", forumRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync() 
    .then(result => {
    app.listen(PORT, () => console.log("Server is running on port 5000"))
})
    .catch((err) => console.log(err || "failed to connect"))