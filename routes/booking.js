var express = require('express');
var router = express.Router();

var BookingModel = require('../models/bookingModel');

/**
 * Get one users
 * 
 * @param {Http} req 
 * @param {Http} res 
 * @param {Http} next 
 */
router.get('/:id', function(req, res, next) {

    BookingModel.findOne({_id: req.params.id}).then(function(booking){
        res.send(booking);
    }).catch(next);
});

/**
 * Search for spesific user
 * Or get all users
 * 
 * @param {Http} req 
 * @param {Http} res 
 * @param {Http} next 
 */
router.get('/', function(req, res, next) {
    if(typeof req.query.firstname === "string"){
        BookingModel.find({firstname: req.query.firstname}).then(function(booking){
            res.send(booking);
        }).catch(next);
    }else{
        BookingModel.find().then(function(booking){
            res.send(booking);
        }).catch(next);
    }
});

/**
 * Create a user
 * 
 * @param {Http} req 
 * @param {Http} res 
 * @param {Http} next 
 */
router.post('/', function (req, res, next) {
    
    BookingModel.create(req.body).then(function(booking){
        res.send(booking);
    }).catch(next);
});

/**
 * Update a user
 * 
 * @param {Http} req 
 * @param {Http} res 
 * @param {Http} next 
 */
router.put('/:id', function (req, res, next) {
    
    BookingModel.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        BookingModel.findOne({_id: req.params.id}).then(function(booking){
            res.send(booking);
        }).catch(next);
    }).catch(next);
});

/**
 * Delete a user
 * 
 * @param {Http} req 
 * @param {Http} res 
 * @param {Http} next 
 */
router.delete('/:id', function (req, res, next) {
    
    BookingModel.findByIdAndRemove({_id: req.params.id}).then(function(booking){
        res.send(booking);
    }).catch(next);
});

module.exports = router;
