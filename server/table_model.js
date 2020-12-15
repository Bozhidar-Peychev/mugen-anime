const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Anime",
  password: "102030",
  port: 5432,
});
const getAnime = () => {
  return new Promise(function (resolve, reject) {
    pool.query("SELECT * FROM books", (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};
module.exports = {
  getAnime,
};
