let express = require('express');
let routes = express.Router();


routes.get('/', (req, res) => {
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

routes.get('/admin', (req, res) => {
    res.started = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        users: []
    });
})

module.exports = routes;