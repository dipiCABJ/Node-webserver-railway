require('dotenv').config();
const express = require('express');
const app = express();
const host = process.env.HOST;
const port = process.env.PORT;
const hbs = require('hbs');

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});


//Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Diego Dipietro',
        title: 'Curso de NodeJS 2025'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Diego Dipietro',
        title: 'Curso de NodeJS 2025'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Diego Dipietro',
        title: 'Curso de NodeJS 2025'
    });
})

app.listen(port, () => {
    console.log(`Example app listening at ${host}:${port}`);
});

/*
app.get('/generic', function (req, res) {
    res.sendFile(__dirname + '/public/generic.html');
})

app.get('/elements', function (req, res) {
    res.sendFile(__dirname + '/public/elements.html');
})

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
})
*/