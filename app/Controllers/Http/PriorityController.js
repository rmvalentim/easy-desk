'use strict'

const Priority = use('App/Models/Priority')

class PriorityController {
  
  async index ({ view }) {
    const priorities = await Priority.all();

    return view.render('Priority.index', { priorities: priorities.rows });
  }
  
  async create ({ view }) {
    return view.render('Priority.create');
  }
 
  async store ({ request, response }) {
    await Priority.create(request.only([
      'description'
    ]));

    response.redirect('/priorities');
  }

  async show ({ params, view }) {
    const priority = await Priority.findOrFail(params.id);

    return view.render('Priority.show', { priority: priority });
  }

  async edit ({ params, view }) {
    const priority = await Priority.findOrFail(params.id);

    return view.render('Priority.edit', { priority: priority });
  }

  async update ({ params, request, response }) {
    const priority = await Priority.findOrFail(params.id);

    const data = request.only([
      'description'
    ]);

    priority.merge(data);
    priority.save();

    response.redirect('/priorities');

  }

  async destroy ({ params, response }) {
    const priority = await Priority.findOrFail(params.id);
    await priority.delete();

    response.redirect('/priorities');
  }
}

module.exports = PriorityController
