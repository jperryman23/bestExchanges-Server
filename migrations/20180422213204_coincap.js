exports.up = function(knex, Promise) {
  return knex.schema.createTable('coincap', (table) =>{
      table.increments();
      table.float('btc_usd')
      table.text('alt_name')
      table.float('rate')
      table.float('alt_usd')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('coincap')
};
