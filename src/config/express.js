/**
 * @description express相關設定檔
 * @author frenkie
 * @date 2020-05-13
 */

/* express.js */
import express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';




import createError from'http-errors';

import indexRoutes from '../server/routes/index';
import connrctServerRoutes from '../server/routes/connrctServer';


const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));


/* GET home page. */

// https://cnodejs.org/topic/5ae347ffadea947348e75ec6

/**
 * 
 */
app.use('/', indexRoutes);
app.use('/connect', connrctServerRoutes);

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