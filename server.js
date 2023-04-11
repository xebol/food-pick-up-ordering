// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
<<<<<<< HEAD
<<<<<<< HEAD
const bodyParser = require('body-parser')
=======
=======
const cookieSession = require('cookie-session');
>>>>>>> login-route
const bodyParser = require('body-parser');

>>>>>>> menu-items-routes
const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(
  cookieSession({
    name: 'session',
    keys: ["key1"],
  })
);
app.use(express.static('public'));
app.use(bodyParser.json());

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
// const userApiRoutes = require('./routes/users-api');
// const widgetApiRoutes = require('./routes/widgets-api');
const customerApiRoutes = require('./routes/customers-api');
<<<<<<< HEAD
const orderApiRoutes = require('./routes/orders-api');
const reviewApiRoutes = require('./routes/reviews-api');
=======
const menuItemsApiRoutes = require('./routes/menu_items-api');
<<<<<<< HEAD
>>>>>>> menu-items-routes
=======
const loginApiRoutes = require('./routes/login-api');
>>>>>>> login-route
const usersRoutes = require('./routes/users');
const testRoutes = require('./routes/test');


// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
// app.use('/api/users', userApiRoutes);
// app.use('/api/widgets', widgetApiRoutes);
app.use(bodyParser.json())
app.use('/api/customers', customerApiRoutes);
<<<<<<< HEAD
app.use('/api/orders', orderApiRoutes);
app.use('/api/reviews', reviewApiRoutes);
=======
app.use('/api/menu_items', menuItemsApiRoutes);
<<<<<<< HEAD
>>>>>>> menu-items-routes
=======
app.use('/api/login', loginApiRoutes);
>>>>>>> login-route
app.use('/users', usersRoutes);
app.use('/test', testRoutes);
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
