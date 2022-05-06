const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.started = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello, world!</h1>');
});

app.get('/users', (req, res) => {
    res.started = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        users: [{
            name: 'Cristiano',
            email: 'cristiano@gmail.com',
            id: 1
        }]
    });
});


app.listen(3000, '127.0.0.1', () => {

    console.log('server started');
});