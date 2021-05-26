const express = require('express');
const router = require('./Router');
var path = require('path');
const app = express();

const port = 3000;
const base = 'http://localhost';

app.set('base', `${base}:${port}`);

app.use('/api', router);
app.use('/public/uploads',express.static(path.join(__dirname, 'public/uploads')));

app.listen(port, ()=>console.log(`Express Crud server has been started and listening on port ${port}`));