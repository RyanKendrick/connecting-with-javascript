const pg = require("pg");
const settings = require("./settings"); // settings.json
const name = process.argv[2];

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

// let birthParse = function(birthday) {

// }

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query("SELECT * FROM famous_people WHERE first_name = $1 OR last_name = $1", [name], (err, result) => {
    let listNum = 0;
    if (err) {
      return console.error("error running query", err);
    }
    console.log("Searching ...");
    console.log("Found " + result.rows.length + " person(s) by the name " + "'" + name + "':");
    for (let person of result.rows) {
      listNum = listNum += 1;
      console.log("-" + listNum + ": " + person.first_name + " " + person.last_name + ", born '" + person.birthdate + "'")
    }
    // console.log(result.rows); //output: 1
    client.end();
  });
});