'use strict'

const Ticket = use('App/Models/Ticket');
const Status = use('App/Models/TicketStatus');
const Priority = use('App/Models/Priority');
const Category = use('App/Models/Category');

class TicketController {

  async index ({ view }) {
    const tickets = await Ticket.all();

    return view.render('Ticket.index', { tickets: tickets.rows });
  }


  async create ({ view }) {
    const statuses = await Status.all();
    const priorities = await Priority.all();
    const categories = await Category.all();

    return view.render('Ticket.create',{
      statuses: statuses.rows,
      priorities: priorities.rows,
      categories: categories.rows
    });
  }

  // Melhorar o retorno dos relacionamentos
  async store ({ request, response }) {
    const status = request.only(['status']);
    const priority = request.only(['priority']);
    const category = request.only(['category']);


    const ticketData = request.only([
      'title',
      'description',
      'creatorEmail'
    ]);

    await Ticket.create({...ticketData, 
      status_id: status.status,
      priority_id: priority.priority,
      category_id: category.category
    });

    response.redirect('/tickets');
  }


  async show ({ params, request, response, view }) {
  }


  async edit ({ params, request, response, view }) {
  }


  async update ({ params, request, response }) {
  }


  async destroy ({ params, request, response }) {
  }
}

module.exports = TicketController
