const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')





let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMEMAIL,   
        pass: process.env.GMPASSWORD  
    }
})


transporter.use('compile', hbs({
    viewEngine:'express-handlebars',
    viewPath: './server/views/'
}))

function emailTo(somebody){

    let mailOptions = {
        from: process.env.GMEMAIL,
        to: somebody,
        subject: 'Email Received',
        text: 'Your email has been delivered!',
        /* attachments: [
            {filename: 'us.jpg', path:'./us.jpg'}
        ], */
        template: 'index' 
    }

    transporter.sendMail(mailOptions,(err, data)=>{
        
        err ? console.log('Error:', err) : console.log('email sent');
    })

}

module.exports = emailTo