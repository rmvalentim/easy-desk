'use strict'

const TicketStatus = use('App/Models/TicketStatus');

class TicketStatusController {

  async index ({ view }) {
    const ticketsStatus = await TicketStatus.all();

    return view.render('TicketStatus.index', { ticketsStatus: ticketsStatus.rows });
  }

  async create ({ view }) {
    return view.render('TicketStatus.create');
  }

  async store ({ request, response }) {
    await TicketStatus.create(request.only([
      'description'
    ]));

    response.redirect('/ticketStatus');
  }

  async show ({ params, view }) {
    const ticketStatus = await TicketStatus.findOrFail(params.id);
    
    return view.render('TicketStatus.show', { ticketStatus: ticketStatus });
    
  }

  async edit ({ params, view }) {
    const ticketStatus = await TicketStatus.findOrFail(params.id);
    
    return view.render('TicketStatus.edit', { ticketStatus: ticketStatus });
  }

  async update ({ params, request, response }) {
    const ticketStatus = await TicketStatus.findOrFail(params.id);

    const data = request.only([
      'description'
    ]);

    ticketStatus.merge(data);
    ticketStatus.save();
    
    response.redirect('/ticketStatus');
  }

  async destroy ({ params, request, response }) {
    const ticketStatus = await TicketStatus.findOrFail(params.id);
    await ticketStatus.delete();

    return response.redirect('/ticketStatus');
  }
}

module.exports = TicketStatusController
