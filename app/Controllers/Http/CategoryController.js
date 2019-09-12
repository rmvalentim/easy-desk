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
 
  async edit ({ params, view }) {
    const category = await Category.findOrFail(params.id);

    return view.render('Category.edit', { category: category });
  }
  
  async update ({ params, request, response }) {
    const category = await Category.findOrFail(params.id);
    
    const data = request.only([
      'description'
    ]);

    category.merge(data);
    category.save();

    response.redirect('/categories');
  }
  
  async destroy ({ params, response }) {
    const category = await Category.findOrFail(params.id);
    await category.delete();

    response.redirect('/categories');
  }
}

module.exports = CategoryController
