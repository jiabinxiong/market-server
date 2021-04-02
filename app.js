const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const db = require('./db/connect');
const { verifyToken } = require('./verify/verifyToken');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/public', express.static(path.join(__dirname, './static')));

const { marketManagementRouter, pcasCodeRouter, uploadRouter } = require('./router');
// ----------后台管理----------
//账号
const userManagementLoginRouter = require('./router/user/management/user.router');
app.use('/api/user/management', userManagementLoginRouter);

//需要验证
app.use('/api/management', verifyToken, marketManagementRouter);
app.use('/api', uploadRouter);

//公共
const provinceRouter = require('./router/common/administrations/province.router');
// app.use('/api/common/administration', provinceRouter);
app.use('/api/common/administration', pcasCodeRouter)

app.listen(3000, () => {
    console.log('服务器启动中')
})