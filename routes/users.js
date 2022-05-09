let NeDB = require('nedb');

let db = new NeDB({
    filename: 'users.db',
    autoload: true,
})

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

        db.insert(req.body, (err, user) => {

            if (err) {
                console.log(`error inserting: ${err}`);
                res.status(400).json({
                    error:err
                });
            } else {

                res.status(200).json(user);
            }
        })
    });
};