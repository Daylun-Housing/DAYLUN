require('dns').setDefaultResultOrder('ipv4first');

import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const { email, width, height, length } = req.body;

  // Save to local file.
  const logPath = path.resolve('./emails.txt');
  const entry = `Email: ${email}, Width: ${width}, Height: ${height}, Length: ${length}\n`;
  fs.appendFileSync(logPath, entry);

  // Send email.
  const transporter = nodemailer.createTransport({
    service: 'smtp.gmail.com',
    auth: {
      user: 'jeff@daylun.ca',      // Automated emails will be sent from me, Jeff, for now. Will speak to Arthur soon.
      pass: 'paja axfi uyfv sjt' // IMPORTANT: APP PASSWORD, NOT REGULAR PASSWORD.
    }
  });

  try {
    await transporter.sendMail({
      from: '"Daylun AutoSender" <your_gmail_address@gmail.com>',
      to: email,
      subject: 'Your House Design Submission',
      text: `Thank you! We received your design:\nWidth: ${width}\nHeight: ${height}\nLength: ${length}`,
    });

    return res.status(200).json({ message: "Confirmation sent!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Failed to send email." });
  }
}
