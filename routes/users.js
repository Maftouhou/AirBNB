var express = require('express');
var router = express.Router();

var UserModel = require('../models/userModel');

/**
 * Get one users
 * 
 * @param {Http} req 
 * @param {Http} res 
 * @param {Http} next 
 */
router.get('/:id', function(req, res, next) {

    UserModel.findOne({_id: req.params.id}).then(function(user){
        res.status((user.length === 0) ? 204 : 200);
        res.send(user);
        res.end();
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
        UserModel.find({firstname: req.query.firstname}).then(function(user){
            res.status((user.length === 0) ? 204 : 200);
            res.send(user);
            res.end();
        }).catch(next);
    }else{
        UserModel.find().then(function(user){
            res.status((user.length === 0) ? 204 : 200);
            res.send(user);
            res.end();
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
    
    UserModel.create(req.body).then(function(user){
        res.status(201);
        res.send(user);
        res.end();
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
    
    UserModel.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        UserModel.findOne({_id: req.params.id}).then(function(user){
            res.status(200);
            res.send(user);
            res.end();
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
    
    UserModel.findByIdAndRemove({_id: req.params.id}).then(function(user){
        res.status(200);
        res.send(user);
        res.end();
    }).catch(next);
});

module.exports = router;
