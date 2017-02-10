var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
<<<<<<< HEAD

var park = require('./routes/park'),
=======
var serial = require('./serial');

var bike = require('./routes/bike'),
>>>>>>> 81cc113ddb00829736a9595f6c769337103fc3e0
  user = require('./routes/user'),
  assets = require('./routes/public'),
  index = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app
<<<<<<< HEAD
  .use('/park', park) //databade ISP_parks
  .use('/user', user) //databade ISP_users
=======
  .use('/bike', bike) //databade bikes
  .use('/user', user) //databade users
>>>>>>> 81cc113ddb00829736a9595f6c769337103fc3e0
  .use('/public', assets) //css js e img per html
  .use('/app', index); //applicazione utente

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
