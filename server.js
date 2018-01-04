// server.js
// where your node app starts

// init project
var express = require('express');
var url = require('url');
var app = express();
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
// app.use(express.static('public'));

// // http://expressjs.com/en/starter/basic-routing.html
// app.get("/", function (request, response) {
//   response.sendFile(__dirname + '/views/index.html');
// });

// app.get("/dreams", function (request, response) {
//   response.send(dreams);
// });

// // could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
// app.post("/dreams", function (request, response) {
//   dreams.push(request.query.dream);
//   response.sendStatus(200);
// });

// // Simple in-memory store for now
// var dreams = [
//   "Find and count some sheep",
//   "Climb a really tall mountain",
//   "Wash the dishes"
// ];

// // listen for requests :)
// var listener = app.listen(process.env.PORT, function () {
//   console.log('Your app is listening on port ' + listener.address().port);
// });

function parseTime(date){
        return {
        unix: date.,
        minute: time.getMinutes(),
        second: time.getSeconds()
        };
}

function parseUnix(time){
        return {unixtime: time.getTime()};
}

app.get('/', function(req,res){
  res.send(index.html);  
});

app.get('/:TIME', function(req,res){
        var date = new Date (req.params.TIME);
        var ret = { unixtime: null, natural: null };
        var month = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        if(/^\d+/.test(req.params.TIME))
                ret[unixtime] = req.params.TIME;
                ret[natural] = month[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear(); 
        } else {
                ret[unixtime] = date.getTime();
                
        }
        if(result){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(result));
        } else {
        res.writeHead(404);
        res.end(req.url);
        }
});
