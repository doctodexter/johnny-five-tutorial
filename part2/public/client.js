let socket = io();
let input = document.getElementById("hexcolor");
input.onchange = () => {
    socket.emit("color", {
      color : input.value
    });
}