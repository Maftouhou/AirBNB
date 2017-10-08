var express = require('express');
var router = express.Router();

var config = function(){
    return {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, 
        auth: {
            user: 'mafthib@gmail.com', 
            pass: 'Projet@2016' 
        }
    };
};

module.exports = config;