const express = require('express');
const router = express.Router();
const data = require('../data.json');

router.use('/static', express.static('public'));

router.get('/projects/:id', (req, res, next) => {
    console.log(`this is the ID within the project routes: ${req.params.id}`);
    let  id  = parseInt(req.params.id);
    console.log(`this is the ID within the project routes: ${id}`);
    if (id+1) {
        let projectData = data.projects.filter((value, key) => key === id);
        return res.render('project', {"projectData": projectData[0]});
    } 
});

module.exports = router;