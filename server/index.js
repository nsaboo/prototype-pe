const path = require('path');
const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./routes');

const PORT = process.env.PORT || 3000;
const EXPRESS_LOG_FILE = process.env.EXPRESS_LOG_FILE || './access.log';
const accessLogStream = fs.createWriteStream(`${EXPRESS_LOG_FILE}`, { flags: 'a' });

const app = express();

app.use(morgan('combined', { stream: accessLogStream }));
app.use(express.static(path.join(__dirname, '../public/')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

app.listen(PORT, () => {});

module.exports = app;
