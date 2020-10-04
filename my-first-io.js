const fs = require("fs");
let num = process.argv[2];
let data = fs.readFileSync(num).toString().split("\n").length - 1;
console.log(data);
