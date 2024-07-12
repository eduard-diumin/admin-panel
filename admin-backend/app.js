var createError = require('http-errors');
var express = require('express');
var path = require('path');
const cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const jwt = require('jsonwebtoken');
var users = require('./users.json');

const tokenKey = '1a2b-3c4d-5e6f-7g8h';

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({
  origin: 'http://localhost:3000', // Разрешить только с определенного источника
  methods: ['GET', 'POST'], // Разрешить только определенные методы
  credentials: true // Если нужно передавать куки и другие учётные данные
}));

app.post('/api/auth', (req, res) => {
  for (let user of users) {
      if (
          req.body.login === user.login &&
          req.body.password === user.password
      ) {
          return res.status(200).json({
              id: user.id,
              login: user.login,
              token: jwt.sign({ id: user.id }, tokenKey),
          });
      }
  }

  return res
      .status(404)
      .json({ message: 'User not found' });
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
