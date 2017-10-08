var express = require('express');
var router = express.Router();

var AppartementModel = require('../models/appartementModel');

/**
 * Get one Appartement
 * 
 * @param {Http} req 
 * @param {Http} res 
 * @param {Http} next 
 */
router.get('/:id', function(req, res, next) {

    AppartementModel.findOne({_id: req.params.id}).then(function(appart){
        res.status((appart.length === 0) ? 204 : 200);
        res.send(appart);
        res.end();
    }).catch(next);
});

/**
 * Search for spesific Appartement
 * Or get all Appartement
 * 
 * @param {Http} req 
 * @param {Http} res 
 * @param {Http} next 
 */
router.get('/', function(req, res, next) {
    if(typeof req.query.appartementCity === "string"){
        AppartementModel.find({appartementCity: req.query.appartementCity}).then(function(appart){
            res.status((appart.length === 0) ? 204 : 200);
            res.send(appart);
            res.end();
        }).catch(next);
    }else{
        AppartementModel.find().then(function(appart){
            res.status((appart.length === 0) ? 204 : 200);
            res.send(appart);
            res.end();
        }).catch(next);
    }
});

/**
 * Create a Appartement
 * 
 * @param {Http} req 
 * @param {Http} res 
 * @param {Http} next 
 */
router.post('/', function (req, res, next) {
    
    AppartementModel.create(req.body).then(function(appart){
        res.status(201);
        res.send(appart);
        res.end();
    }).catch(next);
});

/**
 * Update a Appartement
 * 
 * @param {Http} req 
 * @param {Http} res 
 * @param {Http} next 
 */
router.put('/:id', function (req, res, next) {
    
    AppartementModel.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        AppartementModel.findOne({_id: req.params.id}).then(function(appart){
            res.status(200);
            res.send(appart);
            res.end();
        }).catch(next);
    }).catch(next);
});

/**
 * Delete a Appartement
 * 
 * @param {Http} req 
 * @param {Http} res 
 * @param {Http} next 
 */
router.delete('/:id', function (req, res, next) {
    
    AppartementModel.findByIdAndRemove({_id: req.params.id}).then(function(appart){
        res.status(200);
        res.send(appart);
        res.end();
    }).catch(next);
});

module.exports = router;
