const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Setup Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // Anda bisa menggunakan email provider lain
  auth: {
    user: 'ramving2626@gmail.com',
    pass: 'Apaajajugaboleh12345', // Pastikan menggunakan email app password atau OAuth untuk lebih aman
  },
});

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Setup email data
  const mailOptions = {
    from: email,
    to: 'your-email@example.com', // Ganti dengan alamat email Anda
    subject: `New message from ${name}`,
    text: `Message: ${message}\n\nFrom: ${name} <${email}>`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending email');
    }
    res.status(200).send('Email sent successfully');
  });
});

// Start server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
