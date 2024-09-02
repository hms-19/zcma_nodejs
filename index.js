var express = require('express');
const { config } = require('./src/config/config');
const router = require('./src/routes/api/v1');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })) 
app.use('/api/v1',router)

app.listen(config.port, () => {
    console.log(`Nodejs app is listening on port ${config.port}`)
})