var fs = require("fs");
var path = require("path");
let mymodule = function (dir, ext, callback) {
  fs.readdir(dir, function (err, data) {
    if (err) return callback(err);
    var list = data.filter(function (file) {
      return path.extname(file) === "." + ext;
    });

    return callback(null, list);
  });
};

module.exports = mymodule;
