let five = require("johnny-five");
let express = require("express");
let app = express();
let server = app.listen(3000);
let socket = require("socket.io");
let io = socket(server);
let rgbled;
app.use(express.static("public"));
io.on("connection", socket => {
console.log(socket.id);
socket.on("color" , data => {
  rgbled.color(data.color);
})
});
let board = new five.Board({
  port : "Com3"
});
board.on("ready", () => {
  led = new five.Led(13);
  rgbled = new five.Led.RGB({
    pins: {
    red : 6,
    green : 5 ,
    blue : 3
    }
  })
  board.on("exit" , () => {
    rgbled.off();
  });
});
