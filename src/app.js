const express = require('express');
const app = express();
const cors = require('cors');
//Setings============================================

//Import bodyParser
const bodyParser = require('body-parser');
//Configure express to user BodyParser ->
app.use(bodyParser.urlencoded( {extended: false} ));
app.use(bodyParser.json());

//Port ->
app.set('port', process.env.PORT || 4000);
//Database ->
require('./database')

//Middlewares============================================

//Cors
app.use(cors());
//Json
app.use(express.json());

//Routes============================================


app.use('/api/users', require('./routes/users') );
app.use('/api/notes', require('./routes/notes') );


module.exports = app;


