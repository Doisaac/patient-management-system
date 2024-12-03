import nodemailer from 'nodemailer';

const registerEmail = async ({email, name, token}) => {
  var transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user:process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS 
    }
  });  

  const info = await transporter.sendMail({
    from: 'PMS - Patient Management System',
    to: email,
    subject: 'Reset your password',
    text: 'Reset your password',
    html: `<p>Hello ${name}, you have requested to change your password</p>
      
      <p>Follow the link below to generate a new password:
        <a href="${process.env.FRONTEND_URL}/forget-password/${token}"> Reset my Password</a>.
      </p>

      <p>Thank you.</p>
    `
  });

  console.log("Message sent: $s", info.messageId);
}

export default registerEmail;