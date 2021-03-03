var createError = require('http-errors');
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var mongoose = require('mongoose')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var items = require('./routes/api/items')

// DB config
var db = require('./config/keys').mongoURI

mongoose.connect(db).then(() => {
  console.log('MongoDB Connected')
}).catch(e => {
  console.log(e)
})

// Use Routes

var app = express();

// Bodyparser Middleware
app.use(bodyParser.json())



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/build')));

app.use(cors())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/build/index.html'))
})

app.use('/api/items', items)
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
