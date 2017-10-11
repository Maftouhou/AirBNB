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
router.post('/', function(req, res, next) {

    var mailSvc = new MaillingService();
    /**
     * Expected Application/JSON : 
     * {
     *   "emailAdress": ['email@example.com'] ,
     *   "subject": "Plain Text subject",
     *   "content": "HTML Content accepted"
     * }
     */
    mailSvc.sendAnEmail(req.body.emailAdress, req.body.subject, req.body.content);
    
    res.status(200);
    res.send({
        title: "Information notice",
        message: "the message \""+req.body.subject+"\" is sent to \"" + req.body.emailAdress +" \""
    });
    res.end();
});

module.exports = router;