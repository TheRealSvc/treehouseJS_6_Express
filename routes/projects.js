const express = require('express');
const router = express.Router();
const data = require('../data.json');

router.use('/static', express.static('public'));

router.get('/projects/:id', (req, res, next) => {
    let id = parseInt(req.params.id) ; 
    if (typeof(id) !== 'number' || isNaN(id) ) {
        const err = new Error("Ups, this page appears to be non-existing !" );
        err.status = 404;
        return(next(err));
    } else {
        let projectData = data.projects.filter((value, key) => key === id);
        return(res.render('project', {"projectData": projectData[0]}));
    } 
});

module.exports = router;