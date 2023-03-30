import express from "express";

const app = express();

app.use(require('./products'));

module.exports = app;