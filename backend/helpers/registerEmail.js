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
    subject: 'Confirm your account at PMS',
    text: 'Confirm your account at PMS',
    html: `<p>Hello ${name}, please confirm your account at PMS.</p>
      <p>Your account is almost ready! Just confirm it by clicking the following link: 
      <a href="${process.env.FRONTEND_URL}/confirm/${token}">Confirm my account</a>.</p>

      <p>If you did not create this account, just ignore this email.</p>
    `
  });

  console.log("Message sent: $s", info.messageId);
}

export default registerEmail;