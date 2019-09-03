'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.on('/').render('welcome');

Route
    .post('/login', 'UserController.login');
  

Route
    .get('/users/:id', 'UserController.show')
    .middleware('auth');