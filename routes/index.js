const express = require("express");
// middleware to export the two index.js files inside respective routes.
const apiRouter = require("./apiRoutes");
const htmlRouter = require("./htmlRoutes");

const app = express();

app.use("/api", apiRouter);
app.use("/", htmlRouter);

module.exports = app;
