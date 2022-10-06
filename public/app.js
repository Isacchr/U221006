var express = require('express');
var app = express();
var things = require('./things.js');

app.use('/things', things);

app.use(express.static('public'));

/*app.get('/', function(req, res){
   res.send("Hello world!");
});*/

app.post('/hello', function(req, res){
    res.send("You just called the post method at '/hello'!\n");
 }); 

app.listen(3000);