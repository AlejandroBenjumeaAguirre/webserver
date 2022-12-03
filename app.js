const express = require('express');
const hbs = require('hbs');
require('dotenv').config();


const app = express();
const port = process.env.PORT;


// Handlebars
/* app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials'); */




//Servir contenido statico
app.use( express.static('public'));

/* app.get('/', function (req, res) {
  res.render('home', {
    nombre: 'Alejandro Benjumea',
    titulo: 'Curso Node'
  });
});

app.get('/generic', function (req, res) {
  res.render('generic', {
    nombre: 'Alejandro Benjumea',
    titulo: 'Curso Node'
  });
});

app.get('/elements', function (req, res) {
  res.render('elements', {
    nombre: 'Alejandro Benjumea',
    titulo: 'Curso Node'
  });
}); */

/* app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
}); */

app.listen(port, () => {
    console.log(`Corriendo en el puerto http:;//localhost:${port}`);
});