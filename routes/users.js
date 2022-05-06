module.exports = (app) => {

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

    app.post('/users', (req, res) => {

        res.json(req.body);
    });
};