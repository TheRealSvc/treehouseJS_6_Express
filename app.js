const express = require('express');
const router = express.Router();
const data = require('./data.json');

const app = express();
console.log(data);

//const projectRoutes = require('./routes/project');
//app.use(projectRoutes);

//app.use(bodyParser.urlencoded({ extended: false}));
//app.use(cookieParser());
app.use('/static', express.static('public'));

app.set('view engine', 'pug');

/*
router.get('/:id', (req, res) => {
    const { side } = req.query;
    const { id } = req.params;

    if ( !side ) {
        return res.redirect(`/cards/${id}?side=question`);
    }
    const name = req.cookies.username;
    const text = cards[id][side];
    const { hint } = cards[id];
    
    const templateData = { id, text, name, side };

    if ( side === 'question' ) {
      templateData.hint = hint;
      templateData.sideToShow = 'answer';
      templateData.sideToShowDisplay = 'Answer';
    } else if ( side === 'answer' ) {
      templateData.sideToShow = 'question';
      templateData.sideToShowDisplay = 'Question';
    }

    res.render('card', templateData);
});

*/

app.use('/', (req,res) => {
    res.render('index', {"data": data});
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