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

// Error middleware for handling - 404
app.use((req, res, next) => {
    const err = new Error("Ups, this page appears to be non-existing !");
    err.status = 404;
    next(err);
});

// error rendering for all cases 
app.use((err, req, res, next) => {
    console.log(err.status);
    res.locals.error = err;
    if (err.status === 404) {
        err.message = 'page not found'
        res.status(err.status);
        return res.render('page-not-found', err);
    } else {
        res.status(err.status)
        return res.render('error', err);
    }
});
  
app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});