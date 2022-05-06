module.exports = (app) => {
    app.get('/', (req, 
        res) => {
        res.started = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Hello, world!</h1>');
    });
};