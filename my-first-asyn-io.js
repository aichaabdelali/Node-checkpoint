const fs = require("fs");
let num = process.argv[2];
fs.readFile(num, function (error, data) {
  if (error) console.log(error);
  else {
    console.log(data.toString().split("\n").length - 1);
  }
});
