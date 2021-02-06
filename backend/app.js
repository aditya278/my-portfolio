const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const config = require('./config');
const path = require('path');

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "..", "frontend", "build")));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "..","frontend", "build", "index.html"));
});

app.post('/api/contact-me', (req, res) => {
    try {
        const { name, email, message } = req.body;
        const to = "aditya.shukla278@gmail.com";
        const smtpTransport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            auth : {
                user : config.user,
                pass : config.pass
            }
        });

        const mailOptions = {
            from : email,
            to : to,
            subject : `Hey! ${name} (${email}) visited your website. Here is what they have to say ...`,
            text : message
        }
        smtpTransport.sendMail(mailOptions, (error, response) => {
            if(!error)
                return res.status(200).json({message: 'Email sent'});
            return res.status(404).json({error: error.message});
        });
    }
    catch(err) {
        res.status(404).json({error : err.message});
    }
})

app.listen(port, () => {
    console.log('App Started At Port: ' + port);
})