const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;
const exphbs  = require('express-handlebars');


// const http = require('http')
// const fs = require('fs')
// const url = require('url')
// http.createServer(function(req, res){
//     var q = url.parse(req,url, true);
//     var filename = '.' + q.pathname;
//     if(filename == './html'){filename = './index'}

//     filename = filename + '.html'
//     fs.readFile(filename, function(err, data){
//         if(err){
//             res.writeHead(404, {'contents-type' : 'text.html'});
//             return res.end('404')
//         }
//         res.writeHead(200,{'contents-type' : 'text.html'})
//         res.write(data)
//         return res.end();
//     })
// }).listen(5000);

// Set handlebar
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Set handlebar routes
app.get('/', function (req, res) {
    res.render('home');
});

//creat about page route
app.get('/wetfood', function (req, res) {
    res.render('wetfood', {title : 'Wet Food'});
});

app.get('/dryfood', function (req, res) {
    res.render('dryfood', {title : 'Dry Food'});
});

app.get('/catnip', function (req, res) {
    res.render('catnip', {title : 'catnip'});
});

// Set static folder
app.use(express.static(path.join(__dirname, '/public')));

app.listen(PORT, ()=> console.log('server listening on port ' + PORT))

