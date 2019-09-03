'use strict'

const User = use('App/Models/User');

class UserController {

    async index ({ view }) {
        const users = await User.all();

        return view.render('User.index', { users: users.rows });
    }

    async create ({ view }) {

        return view.render('User.create');
    }

    async store ({ request, response }) {
        const user =  await User.create(request.only([
            'username',
            'email',
            'password'
        ]));
        response.redirect('/users');
    }

    async show ({ params, request, response, view }) {
    }


    async edit ({ params, view }) {       
        const user = await User.find(params.id);
        // TODO
        return view.render('User.edit');
    }


    async update ({ params, request, response }) {
    }


    async destroy ({ params, request, response }) {
    }
}

module.exports = UserController
