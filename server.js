// allows our project read variables from .env files
require("dotenv").config(); 
const node_media_server = require('./media_server'); 
const path = require("path");
const express = require("express");
const sequelize = require("./config/database"); 
const Session = require('express-session');
const bodyParse = require('body-parser');
const middleware = require('connect-ensure-login');
const FileStore = require('session-file-store')(Session);
const flash = require('connect-flash');

// Enables Cross Origin Resource Sharing for our Project
const cors = require("cors");

//importing routes
const prayerRoutes = require("./route/prayer");
const forumRoutes = require("./route/forum");
const blogRoutes = require("./route/blog");

const app = express();

// This parses all json request so we can access
// its contents via 'req.body' object
app.use(express.json());
app.use(cors());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.use(express.static('public'));
app.use(flash());
app.use(require('cookie-parser')());
app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json({extended: true}));

//setting a base path
app.use("/api/prayer", prayerRoutes);
app.use("/api/forum", forumRoutes);
app.use("/api/blog", blogRoutes)

const PORT = process.env.PORT || 5000;
node_media_server.run();
sequelize.sync() 
    .then(result => {
    app.listen(PORT, () => console.log("Server is running on port 5000"))
})
    .catch((err) => console.log(err || "failed to connect"))