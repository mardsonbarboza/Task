const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const RouterTask = require('./routers/RouterTask')
require('dotenv').config();
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swaggerConfig'); // Importa a configuração do Swagger

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/api',RouterTask);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.listen(8080,()=>{
    console.log('server ligado');
})