const nodemailer = require('nodemailer');

exports.sendEmail = (req, res) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'webfortinenses@gmail.com',
            pass: 'rp4store1'
        }
    });

    var mailOptions = {
        from: 'webfortinenses@gmail.com',
        to: 'martinpablopastore@gmail.com',
        subject: 'Nuevo Mensaje (1)',
        text: 'Mensaje: Paso'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.status(500).json({message: error});
        }else{
            console.log(info.response);
            res.status(200).json({message: info.response});
        }
    });
};
