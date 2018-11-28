const nodemailer = require('nodemailer');

exports.sendEmail = (req, res) => {
    var transporter = nodemailer.createTransport({
        service: 'zoho',
        auth: {
            user: 'admin@nutriem.com.ar',
            pass: '@Nutriem2018'
        }
    });

    var mailOptions = {
        from: 'admin@nutriem.com.ar',
        to: 'hola@nutriem.com.ar',
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
