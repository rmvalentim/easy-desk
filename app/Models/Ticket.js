'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Ticket extends Model {

    ticketStatus () {
        return this.hasOne('App/Models/TicketStatus');
    }

    category () {
        return this.hasOne('App/Models/Category');
    }

    priority () {
        return this.hasOne('App/Models/Priority');
    }

    assignedUser () {
        return this.hasOne('App/Models/User');
    }
}

module.exports = Ticket
