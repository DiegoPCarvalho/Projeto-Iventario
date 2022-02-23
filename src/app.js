const express = require('express');
const app = express();
const port = 5000;
const { users } = require('./routers/usersRouters');
const dotEnv = require('dotenv').config();
const bodyParser = require('body-parser');
const { application } = require('express');

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routs
app.use(require('./routers/usersRouters'))

//Initializations
require('./database/dataBase');

app.listen(port, (error) =>{
   try {
       console.log('Server is Running http://localhost:' + port)
   } catch (error) {
       console.log(error)
   }
});