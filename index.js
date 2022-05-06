const http = require('http');

let server = http.createServer((req, res) => {

    console.log('URL:', req.url);
    console.log('METHOD:', req.method);

    switch (req.url) {

        case '/':

            res.started = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>Hello, world!</h1>');

            break;

        case '/users':

            res.started = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
                users: [{
                    name: 'Cristiano',
                    email: 'cristiano@gmail.com',
                    id: 1
                }]
            }));

            break;

    }

});

server.listen(3000, '127.0.0.1', () => {

    console.log('server started');
});