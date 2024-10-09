//var createError = require('http-errors');
const express = require("express");
var path = require('path');
var cookieParser = require('cookie-parser');
//var logger = require('morgan');
// CORS
var cors = require('cors')

//config mongoose
const mongoose = require("mongoose");
require("./models/user.js");
require("./models/category");

var indexRouter = require('./routes/index');
//mogo
var userRoute = require('./routes/userRoute');
var categoryRoute = require('./routes/categoryRoute');

var app = express();

// CORS
app.use(cors())
//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-config.js');
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// CDN CSS
const CSS_URL =
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, { customCssUrl: CSS_URL })
);

//connect database
mongoose.connect('mongodb+srv://thong442001:wZDP0YWjnGkBb6LB@cluster0.0aur9.mongodb.net/kotlin')//link connect vs mongobd
    .then(() => console.log('>>>>>>>>>> DB Connected!!!!!!'))
    .catch(err => console.log('>>>>>>>>> DB Error: ', err));

app.use('/', indexRouter);
//mogo
app.use('/user', userRoute);
app.use('/cate', categoryRoute);


// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     next(createError(404));
// });
// // error handler
// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;