'use strict'

const Category = use('App/Models/Category')

class CategoryController {
 
  async index ({ view }) {
    const categories = await Category.all();

    return view.render('Category.index', {categories: categories.rows});
  }

  
  async create ({ view }) {
    return view.render('Category.create');
  }

  
  async store ({ request, response }) {
    await Category.create(request.only([
      'description'
    ]));

    response.redirect('/categories');
  }

  
  async show ({ params, view }) {
    const category = await Category.findOrFail(params.id);

    return view.render('Category.show', { category: category });
  }

 
  async edit ({ params, request, response, view }) {
  }

  
  async update ({ params, request, response }) {
  }

  
  async destroy ({ params, response }) {
    const category = await Category.findOrFail(params.id);
    await category.delete();

    response.redirect('/categories');
  }
}

module.exports = CategoryController
