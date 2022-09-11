// import { config } from 'dotenv'
// import { config } from './default.js'
import nodemailer from 'nodemailer'

// const pass = config.
export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user; //'AgregatuCorreo, // generated ethereal user
    pass; //'AgregatuTokenDelMail' // generated ethereal password
  }
})
