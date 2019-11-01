'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TicketSchema extends Schema {
  up () {
    this.create('tickets', (table) => {
      table.increments();
      table.string('title').notNullable();
      table.string('description').notNullable();
      
      table
        .integer('status_id')
        .unsigned()
        .references('id')
        .inTable('ticket_status')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');

        table 
          .integer('category_id')
          .unsigned()
          .references('id')
          .inTable('categories')
          .onUpdate('CASCADE')
          .onDelete('RESTRICT');

        table 
          .integer('priority_id')
          .unsigned()
          .references('id')
          .inTable('priorities')
          .onUpdate('CASCADE')
          .onDelete('RESTRICT');

        table 
          .integer('assigned_user_id')
          .unsigned()
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('RESTRICT');

      table.string('creatorEmail').notNullable();
      table.timestamps();
    })
  }

  down () {
    this.drop('tickets');
  }
}

module.exports = TicketSchema;
