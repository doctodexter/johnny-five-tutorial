let five = require("johnny-five");
let board = new five.Board({
  port : "Com3"
});
let led;
board.on("ready", () => {
  led = new five.Led(13);
  board.on("exit" , () => {
    led.off();
  });
});
