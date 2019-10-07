let express = require("express");
let app = express();
let server = app.listen(3000);
const five = require("johnny-five")
let io = require("socket.io")(server);
app.use(express.static("public"));
let discord = require("discord.js");
let bot = new discord.Client();
let tfstate;
let name;
let description;
const superagent = require("superagent");
bot.login("NjE2MTk5MDkyMTk1ODE5NTIw.XWwa1Q.vjFeBTl1Syzsps5WoX838a0eZOc");
bot.on("ready", () => {
console.log("ready");
});
// bot.on("message", async message => {
//     if(message.content === "s%pokedex"){
//         message.reply("Please enter a pokemon name.");
//         tfstate = false;
//     }else{
//         tfstate = true;
//     }
//     if(message.content.startsWith("s%pokedex")){
//         let pokemonname = [];

//         async function sendpokedex(){
//             if(tfstate === true){
//                 for(let i = 10; i < message.content.length;i++){
//                     pokemonname.push(message.content[i]);
//                 }
//                 name = pokemonname.join("");
//                 async function setdesc(){
//                     let {body} = await superagent
//                     .get('https://pokeapi.co/api/v2/pokemon-species/' + name + "/");
//                     for(let i = 0;i < body.flavor_text_entries.length;i++){
//                         if(body.flavor_text_entries[i].language.name === "en"){
//                         description = body.flavor_text_entries[i].flavor_text;
//                     }
//                     } 
//                 }
//                 setdesc();
//                 let {body} = await superagent.get("https://pokeapi.co/api/v2/pokemon/" + name).catch(err => {
//                   message.reply("I can't find this pokemon.")
//                 });
//                 let pe = new discord.RichEmbed();
//                 pe.setTitle(body.forms[0].name);
//                 pe.setImage(body.sprites.front_default);
//                 pe.setDescription(description);
//                 setdesc();
//                 // console.log(getdescription(name));
//                 message.channel.send(pe);
//             }


//         }
//         sendpokedex();
//     }
// });
let state = "on";
let led;
let servo;
let servo2;
let rgbled;
let photoresistor;
let button;
let button2;
let button3;
let button4;
let piezo;
let board = new five.Board(
{
    port : "Com3"
});

//     console.log(socket.id);
//     socket.on("playa", () => {
//         piezo.play({
//             song: "A",
//             beats: 1 / 4,
//             tempo: 100
//           });
//     });
//     socket.on("playb", () => {
//         piezo.play({
//             song: "B",
//             beats: 1 / 4,
//             tempo: 100
//           });
//     });
//     socket.on("playc", () => {
//         piezo.play({
//             song: "C",
//             beats: 1 / 4,
//             tempo: 100
//           });
//     });
//     socket.on("playd", () => {
//         piezo.play({
//             song: "D",
//             beats: 1 / 4,
//             tempo: 100
//           });
//     });
//     socket.on("playf", () => {
//         piezo.play({
//             song: "F",
//             beats: 1 / 4,
//             tempo: 100
//           });
//     });
//     socket.on("playg", () => {
//         piezo.play({
//             song: "G",
//             beats: 1 / 4,
//             tempo: 100
//           });
//           led.blink();

//     });
//     socket.on("playh", () => {
//         piezo.play({
//             song: "H",
//             beats: 1 / 4,
//             tempo: 100
//           });
//           led.blink();

//     });
//     socket.on("playj", () => {
//         piezo.play({
//             song: "J",
//             beats: 1 / 4,
//             tempo: 100
//           });
//           led.blink();

//     });
//     socket.on("playk", () => {
//         piezo.play({
//             song: "K",
//             beats: 1 / 4,
//             tempo: 100
//           });
//           led.blink();
//     });
// });

board.on("ready", () => {
    rgbled = new five.Led.RGB({
        pins : {
            red : 3,
            green : 5,
            blue : 6
        }
    });
    io.on("connection", socket => {
        console.log(socket.id)
    socket.on("color", data => {
     rgbled.color(data.color);
    //  console.log(data.color);
    });
    });
    board.on("exit", () => rgbled.off());
    // rgbled.color("FFFFFF")
    // led = new five.Led(5)
    // photoresistor = new five.Light("A0");
//     button4 = new five.Button({
//      pin : 3,
//      isPullup : true
//     });
//     button4.on("press", () => {
//         io.emit("movedown");
//     bot.channels.get("515976436234977303").send('s%dog');

//     })
//     button3 = new five.Button({
//     pin : 7,
//     isPullup : true
//     });
//     button3.on("press", () => {
//     io.emit("moveup");
//     bot.channels.get("515976436234977303").send('s%cat');

//     });
//     button2 = new five.Button({
//         pin : 9,
//         isPullup : true
//     });
//     button2.on("press", () => {
//     // console.log("button2 pressed!");
//     io.emit("moveright");
//     bot.channels.get("515976436234977303").send('s%fox');

//     });
//     button = new five.Button({
//         pin : 5, 
//         isPullup : true
//     });
//     button.on("press", () => {
//         // console.log("button pressed!");
//     io.emit("moveleft");
//     bot.channels.get("515976436234977303").send('s%pokemon');
//     })
// piezo = new five.Piezo(6);
// piezo.play({
//  song : "K",
//  beats: 1 / 4,
//  tempo: 100
// });
});

