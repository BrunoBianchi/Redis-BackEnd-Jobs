import nodemailer from 'nodemailer';
export default nodemailer.createTransport({
    host: "",
    port: "",
    auth: {
      user: "",
      pass: ""
    }
})