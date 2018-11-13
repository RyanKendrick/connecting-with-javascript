const settings = require("./settings"); // settings.json
const name = process.argv[2];
// requires the knex module via PostgreSQL client
const knex = require('knex')({
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});


knex.select().from("famous_people").where({"first_name": name}).orWhere({"last_name": name}).then( function(result) {
  console.log(result);
  listNum = 0;
  console.log("Searching ...");
  console.log("Found " + result.length + " person(s) by the name " + "'" + name + "':");

  for (let person of result) {
      listNum = listNum += 1;
      console.log("-" + listNum + ": " + person.first_name + " " + person.last_name + ", born '" + person.birthdate + "'")

    }
    knex.destroy();
});

