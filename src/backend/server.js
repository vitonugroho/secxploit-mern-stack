const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

// Middleware to handle CORS and parse JSON body
app.use(cors());
app.use(bodyParser.json());

// Route for GET / 
app.get('/', (req, res) => {
  res.send('Welcome to the Email API!');
});

// Set up Nodemailer transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can replace it with another email service if needed
  auth: {
    user: 'ramving26@gmail.com', // Your Gmail address
    pass: 'deoi fvej tnnb jiku', // Use App Password if 2-Step Verification is enabled
  },
});

// POST route to handle contact form submission
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Define email options
  const mailOptions = {
    from: email, // Sender's email
    to: 'ramving26@gmail.com', // Recipient's email
    subject: `New message from ${name}`, // Subject line
    text: `Message: ${message}\n\nFrom: ${name} <${email}>`, // Email body
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error); // Log error on the server
      return res.status(500).json({ message: 'Error sending email', error: error.message });
    }
    console.log('Email sent:', info.response); // Log success response
    return res.status(200).json({ message: 'Email sent successfully' });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});




// user: 'ramving26@gmail.com', // Replace with your email
// pass: 'deoi fvej tnnb jiku', // Use an app password (do not use your regular Gmail password)