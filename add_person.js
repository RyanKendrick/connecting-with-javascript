const settings = require("./settings"); // settings.json
const firstName = process.argv[2];
const lastName = process.argv[3];
const personDate = process.argv[4];
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

knex('famous_people').insert({first_name: firstName,
last_name: lastName, birthdate: personDate}, '*').then(function(result) {
  console.log(result);
}).finally(() => {knex.destroy()});


