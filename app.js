const express = require('express');
const app = express();
const academicRoute = require('./routes/academicRoute');
const residenceRoute = require('./routes/residenceRoute');
const administrationRoute = require('./routes/administrationRoute');
const transportRoute = require('./routes/transportRoute');

app.use(express.json());

app.use('/api/complaint/academic', academicRoute);
app.use('/api/complaint/residence', residenceRoute);
app.use('/api/complaint/administration', administrationRoute);
app.use('/api/complaint/transport', transportRoute);

module.exports = app;
