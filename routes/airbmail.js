var express = require('express');
var router = express.Router();

var MaillingService = require('../service/maillingService');

/**
 * Search for spesific Appartement
 * Or get all Appartement
 * 
 * @param {Http} req 
 * @param {Http} res 
 * @param {Http} next 
 */
router.get('/', function(req, res, next) {

    var mailSvc = new MaillingService();
    
    mailSvc.sendAnEmail(['maftouh.hassane@gmail.com'], 'This is a subject', 'this is the body');
    
    res.send('sent');
    res.end();
});

module.exports = router;