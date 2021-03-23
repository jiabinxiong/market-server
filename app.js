const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
   res.send('hello haha')
});

app.use('/public', express.static(path.join(__dirname, './static')));

//公共
const provinceRouter = require('./router/common/administrations/province.router');
app.use('/api/common/administration', provinceRouter);


app.listen(3000, () => {
    console.log('服务器启动中')
})