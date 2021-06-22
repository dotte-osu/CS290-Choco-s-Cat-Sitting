var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.use(express.static('public'));
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 51234);

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req,res){
  res.render('home', { home: true });
});

app.get('/about',function(req,res){
  res.render('about', { about: true });
});

app.get('/service',function(req,res){
  res.render('service', { service: true });
});

app.get('/contact',function(req,res){
  res.render('contact', { contact: true });
});

app.get('/thankyou',function(req,res){
  res.render('thankyou', { contact: true });
});

app.post('/thankyou', function (req, res) {
  var context = {};
  var body = [];
  for (var p in req.body) {

    var name = p.charAt(0).toUpperCase() + p.slice(1);
    var value = req.body[p];
    if (p == "first" || p == "last") {
      name = p + " Name";
    } else if (p == "Type") {
      name = "Service Type"
    }
    if (req.body[p] == "on") {
      value = "I need a special care service";
    } 
    body.push({ 'name': name, 'value': value });
  }

  //console.log(req.body);
  context.bodyList = body;
  res.render('thankyou', context);
});




app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log(`Server started on ${process.env.HOSTNAME}:${app.get('port')}; press Ctrl-C to terminate`);
});
