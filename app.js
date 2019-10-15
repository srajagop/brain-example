const brain = require('brain.js')
const fs = require('fs');

let rawdata = fs.readFileSync('trainingdata.json');
let data = JSON.parse(rawdata);

console.log(start = new Date().getTime())
var net = new brain.recurrent.LSTM();
net.fromJSON(data)
console.log("output = "+net.run("I like vegetables."));
console.log(end = new Date().getTime(), (end - start)/1000)