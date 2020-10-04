const fs = require("fs");
const path = require("path");
let dir = process.argv[2];
let ext = "." + process.argv[3];
fs.readdir(dir, function (error, list) {
  if (error) {
    console.log(error);
  } else {
    list.forEach(function (val) {
      if (path.extname(val) === ext) {
        console.log(val);
      }
    });
  }
});
