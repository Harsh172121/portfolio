const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Email Transporter Setup
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can change this based on your API provider (SendGrid, Resend, etc.)
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // ── PREMIUM EMAIL TEMPLATE ──
  const htmlTemplate = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0c0c0c; color: #ffffff; border: 1px solid #222; border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
      <div style="background: linear-gradient(135deg, #4ade80, #22c55e); padding: 30px; text-align: center;">
        <h1 style="margin: 0; color: #000; font-size: 24px; letter-spacing: 1px;">New Connection! 🚀</h1>
      </div>
      
      <div style="padding: 40px 30px;">
        <p style="font-size: 16px; color: #888; margin-bottom: 25px;">You have received a new message from your portfolio website.</p>
        
        <div style="background-color: #161616; padding: 20px; border-radius: 10px; border-left: 4px solid #4ade80; margin-bottom: 25px;">
          <p style="margin: 0 0 10px 0;"><strong style="color: #4ade80;">Sender Name:</strong> ${name}</p>
          <p style="margin: 0 0 10px 0;"><strong style="color: #4ade80;">Email Address:</strong> ${email}</p>
        </div>
        
        <div style="background-color: #161616; padding: 25px; border-radius: 10px; border: 1px solid #222;">
          <h3 style="margin: 0 0 15px 0; color: #4ade80; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Message Content:</h3>
          <p style="margin: 0; color: #e8e8e8; line-height: 1.6; font-size: 15px;">${message}</p>
        </div>
      </div>
      
      <div style="padding: 20px 30px; background-color: #111; text-align: center; border-top: 1px solid #222;">
        <p style="margin: 0; font-size: 12px; color: #555;">Sent from your #Harsh. Portfolio System</p>
      </div>
    </div>
  `;

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`,
    to: process.env.RECEIVER_EMAIL,
    subject: `New Portfolio Message from ${name}`,
    html: htmlTemplate,
    replyTo: email
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('❌ Error occurred while sending email:', error.message);
      return res.status(500).json({ 
        success: false, 
        message: 'Email failed to send',
        error: error.message 
      });
    }
    console.log('✅ Email sent successfully:', info.response);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
