// import { config } from 'dotenv'
// import { config } from './default.js'
import nodemailer from 'nodemailer'

// const pass = config.
export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'wmejiac@miumg.edu.gt', // generated ethereal user
    pass: 'aetwjbchettpndgr' // generated ethereal password
  }
})
