const express = require('express')
const app = express()



app.use(express.json());
const filmeRouter = require('./rotas/filme');
const serieRouter = require('./rotas/serie');
app.use('/filmes', filmeRouter);
app.use('/series', serieRouter);

module.exports = app