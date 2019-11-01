'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.on('/').render('login');

Route
    .post('/login', 'AuthController.login');

// Authenticated routes
Route.group(() => {

    Route.on('/index').render('index');
    
    Route.resource('users', 'UserController');
    Route.resource('categories', 'CategoryController');
    Route.resource('priorities', 'PriorityController');
    Route.resource('ticketStatus', 'TicketStatusController');
    Route.resource('tickets', 'TicketController');

}).middleware(['auth']);
    



    