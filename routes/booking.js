var express = require('express');
var router = express.Router();

var BookingModel = require('../models/bookingModel');
var UserModel = require('../models/userModel');

var MaillingService = require('../service/maillingService');

/**
 * Get one users
 * 
 * @param {Http} req 
 * @param {Http} res 
 * @param {Http} next 
 */
router.get('/:id', function(req, res, next) {

    BookingModel.findOne({_id: req.params.id}).then(function(booking){
        res.status((booking.length === 0) ? 204 : 200);
        res.send(booking);
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
   
    if(typeof req.query.bookingRef === "string"){
        BookingModel.find({bookingRef: req.query.bookingRef}).then(function(booking){
            res.status((booking.length === 0) ? 204 : 200);
            res.send(booking);
            res.end();
        }).catch(next);
    }else{
        BookingModel.find().then(function(booking){
            res.status((booking.length === 0) ? 204 : 200);
            res.send(booking);
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
    var mailSvc = new MaillingService();
    
    
    BookingModel.create(req.body).then(function(booking){
        var bookUseremail = findUserEmail(booking, next);
//        var bookUseremail = ['maftouh.hassane@gmail.com'];
        var bookingTemplateHeader = "Booking Confirmation";
        var bookingTemplateBody = "Hello "+bookUseremail.farstname+", <br /> Your booking '"+ booking.bookingRef +"' is successfuly saved. <br /><br />Thanks !";
        
        mailSvc.sendAnEmail(bookUseremail.email, bookingTemplateHeader, bookingTemplateBody);
        
        res.status(201);
        res.send(booking);
        res.end();
    }).catch(next);
});

/**
 * Find a user
 * 
 * @param {Object} booking
 * @param {Http} next 
 */
function findUserEmail(booking, next){
    this.userEmail;
    this.userFarstname;
    UserModel.findOne({_id: booking.clientID}).then(function(user){
        userEmail = user.email;
        userFarstname = user.firstname;
    }).catch(next);
    
    return {email: userEmail, farstname: userFarstname};
}

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
            res.status(200);
            res.send(booking);
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
    
    BookingModel.findByIdAndRemove({_id: req.params.id}).then(function(booking){
        res.status(200);
        res.send(booking);
        res.end();
    }).catch(next);
});

module.exports = router;
