exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('milestones2', function(table){
      table.integer('famous_person_id');
      table.foreign('famous_person_id').references('id').inTable('famous_people');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('milestones2')
  ])
};