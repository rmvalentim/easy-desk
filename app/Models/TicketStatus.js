'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TicketStatus extends Model {
    static get table () {
        return 'ticket_status';
    }
}

module.exports = TicketStatus
