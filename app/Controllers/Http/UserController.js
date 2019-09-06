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
        const user = await User.findOrFail(params.id);

        return view.render('User.show', {user: user});
    }


    async edit ({ params, view }) {             
        const user = await User.findOrFail(params.id); 

        return view.render('User.edit', {user: user});
    }
    
    async update ({ params, request, response }) {
        const user = await User.findOrFail(params.id);

        const data = request.only([
        'username',
        'email',
        'password'
        ]);

        user.merge(data);
        await user.save();

        response.redirect('/users');
    }


    async destroy ({ params, request, response }) {
        const user = await User.findOrFail(params.id);
        await user.delete();
        
        response.redirect('/users');
    }
}

module.exports = UserController
