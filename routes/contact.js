var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send',function(req,res,next){
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'youremail@gmail.com',
            pass: 'pass of user'
        }
    });
    
    var mailOptions = {
        from: 'your email <youremail@gmail.com>',
        to: 'towhomyouwanttosend2@gmail.com',
        subject: 'Website Submission',
        text: 'You have a new submission with the following details  Name: '+req.body.name+'Email: '+req.body.email+'Message: '+req.body.message,
        html:'<p>You got a new submission with the following details </p><ul><li>Name:  '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
        
    
};

            
    transporter.sendMail(mailOptions,function(error,info){
        if(error){
            console.log(error);
            res.redirect('/');
        } else {
            console.log('Message Sent:'+info.response);
            res.redirect('/');
        }
    });
});

    

module.exports = router;