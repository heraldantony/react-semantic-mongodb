const chalk = require("chalk");
const db = require("../../db");
const bucket = process.env.BUCKET;

module.exports = {
  getJob: id => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM `" + bucket + '` WHERE `type`="job" AND `id` = $1',
        [id],
        (err, results) => {
          if (err) {
            console.log("ERROR: ", chalk.red(err));
            reject({
              statusCode: 500,
              message: "Could not query the database, system error."
            });
          } else if (results.length <= 0) {
            var msg = "Job " + id + " not found.";
            console.log("DEBUG: ", chalk.yellow(msg));

            reject(msg);
          } else {
            var row = results[0][bucket];
            resolve(row);
          }
        }
      );
    });
  }
};
