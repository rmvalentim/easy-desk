'use strict'

const Category = use('App/Models/Category')

class CategoryController {
 
  async index ({ view }) {
    const categories = await Category.all();

    return view.render('Category.index', {categories: categories.rows});
  }

  
  async create ({ request, response, view }) {
  }

  
  async store ({ request, response }) {
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

module.exports = CategoryController
