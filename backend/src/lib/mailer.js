import nodemailer from 'nodemailer';
import { env } from '../config/env.js';

const transporter = nodemailer.createTransport({
  host: env.smtpHost,
  port: env.smtpPort,
  secure: env.smtpSecure,
  auth: {
    user: env.smtpUser,
    pass: env.smtpPass
  }
});

export const sendMail = async ({ to, subject, html, text }) => {
  try {
    return await transporter.sendMail({
      from: env.smtpFrom,
      to,
      subject,
      html,
      text
    });
  } catch (error) {
    console.error('SMTP error:', {
      message: error?.message,
      code: error?.code,
      response: error?.response,
      responseCode: error?.responseCode,
      command: error?.command
    });
    throw error;
  }
};
