var nodemailer = require('nodemailer');
var mailConfig = require('./config');

var SendMail = function(){
    
    // Send an email
    this.sendAnEmail = function(emailAdresses, subject, bodyMail ){
       
        nodemailer.createTestAccount((err, account) => {
            var config = new mailConfig();
            
            let transporter = nodemailer.createTransport({
                host: config.host,
                port: config.port,
                secure: config.secure,
                auth: {
                    user: config.auth.user, 
                    pass: config.auth.pass 
                }
            });

            // setup email data with unicode symbols
            let mailOptions = {
                from: '" Air BNB Customer service " <mafthib@mail.airbnb.api.dev>',
                to: emailAdresses,
                subject: subject,
                html: bodyMail
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
            });
        });
        
    };
};

module.exports = SendMail;