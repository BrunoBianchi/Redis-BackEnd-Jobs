import nodemailer from 'nodemailer';
export default nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "9924767038e08f",
      pass: "b6730203d32048"
    }
})