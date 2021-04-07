const express = require('express');
const data = require('./data.json');
console.log(data.projects);
const app = express();
//app.use(bodyParser.urlencoded({ extended: false}));
//app.use(cookieParser());
app.use('/static', express.static('public'));

app.set('view engine', 'pug');

app.use('/', (req,res) => {
    res.locals.data = data.projects ;
    res.render('index',{});
});

app.use('/about', (req,res) => {
    res.render('about',{});
});

/*
An "index" route (/) to render the "Home" page with the locals set to data.projects
An "about" route (/about) to render the "About" page
Dynamic "project" routes (/project/:id or /projects/:id) based on the id of the project that render a customized version of the Pug project template to show off each project. Which means adding data, or "locals", as an object that contains data to be passed to the Pug template.
*/

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});