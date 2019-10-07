let socket = io();
// let ctx = document.getElementById("canvas").getContext("2d");
let playerx = 180;
let playery = 360 - 25;
let input = document.getElementById("rgb");
input.onchange = () => {

    console.log(input.value);
}
function loop(){
    // ctx.clearRect(0,0,360,360);
    setTimeout(() => {
        socket.emit("color",{
            color : input.value
        });
    }, 20);

    console.log(input.value);
    // ctx.fillRect(playerx,playery,25,25);
    window.requestAnimationFrame(loop);
}
// socket.on("moveup", () => {
//     playery -= 5;
//    });
//    socket.on("movedown", () => {
//     playery += 5;
//    });
//    socket.on("moveleft", () => {
//     playerx -= 5;
//    });
//    socket.on("moveright", () => {
//        playerx += 5;
//       });
loop();
// let input = document.getElementById("rgb").onchange = () => {
// socket.emit("color", {
//     color : document.getElementById("rgb").value
// });
// };
function ledon(){
    socket.emit("ledon");
}
function ledoff(){
    socket.emit("ledoff");
}
function playa(){
socket.emit("playa");
}
function playb(){
socket.emit("playb");
    
}
function playc(){
    socket.emit("playc");
    
}
function playd(){
    socket.emit("playd");
    
}
function playf(){
    socket.emit("playf");
    
}
function playg(){
    socket.emit("playg");
    
}
function playh(){
    socket.emit("playh");
    
}
function playj(){
    socket.emit("playj");
    
}
function playh(){
    socket.emit("playh");
    
}
function playk(){
    socket.emit("playk");
    
}
