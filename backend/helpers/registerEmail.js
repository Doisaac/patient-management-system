import nodemailer from 'nodemailer';


const registerEmail = () => {
  var transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user:process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS 
    }
  });  
}

export default registerEmail;