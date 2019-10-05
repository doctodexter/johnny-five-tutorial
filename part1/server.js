let five = require("johnny-five");
const express = require("express");
const app = express();
let server = app.listen(3000);
const socket = require("socket.io");
let io = socket(server);
app.use(express.static("public"));
let thermometer;
let board = new five.Board({
  port : "Com3"
});
board.on("ready",() => {
});