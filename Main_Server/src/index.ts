import bodyParser = require('body-parser');
import cors = require('cors');
import express = require('express');
import { NextFunction, Request, Response } from 'express';
import createError = require('http-errors');
import { join } from 'path';
import checkRouter from './check';
import productRouter from './product';
import mainRouter from './router';
import * as path from 'path';
import { updateDB } from './database/updateDB';
import * as mysql from 'mysql';
import { mysql_account } from './mysql_account';

const app = express();
app.use(bodyParser.json());

// view 경로 설정
app.use(express.static(path.join(__dirname, '../views')));

// router 세팅
app.use('/', mainRouter);
app.use('/check', checkRouter, express.static(path.join(__dirname, '../views/check')));
app.use('/product', cors(), productRouter);

// 3002 포트 개방
app.listen(3002);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.sendFile(join(__dirname, '../views/error.html'));
});

// mysql connection
export const connect = mysql.createConnection(mysql_account);
connect.connect();

// 매시간마다 DB 업데이트
updateDB();
