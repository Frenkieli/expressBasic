/* express.js */
import express from 'express';
import config from './config';
import path from 'path';
import index from '../server/routes/index';
var createError = require('http-errors');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));


/* GET home page. */
app.get('/', (req, res) => {
  res.render('index', { title: 'temi' , error: ''});
});

app.use('/api', index);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  console.log('出錯訊息:' + res.locals.message)
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;