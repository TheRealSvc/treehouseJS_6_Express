const express = require('express');
const data = require('./data.json');
const app = express();

app.use('/static', express.static('public'));
app.set('view engine', 'pug');

const index = require('./routes/index');
app.use(index);

const about = require('./routes/about');
app.use(about);

const projects = require('./routes/projects');
app.use(projects);

// Error handling - 404
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    err.message = "Ups, this page appears to be non-existing !"
    next(err);
});

// others than 404
app.use((err, req, res, next) => {
    if (err.status !== 404) {
        err = new Error('Server Error'); 
        res.locals.error = err;
        res.status(err.status);
    } else {
        res.locals.error = err;
        res.status(err.status);
    }
    res.render('error', err);
});
  
app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});