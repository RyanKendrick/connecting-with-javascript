exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('milestones2', function(table){
      table.increments().primary();
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('milestones2')
  ])
};
