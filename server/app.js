const express = require('express');
const bodyparser = require('body-parser');
const Routes = require('./RouterController');

let app=express();

app.set('port', (process.env.PORT || 3000));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(function( req, res, next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
});

Routes(app);

var server = app.listen(app.get('port'), () => {
    console.log("Server Running on Port No: ", server.address().port);
});