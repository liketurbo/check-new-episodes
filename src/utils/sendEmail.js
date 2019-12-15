import nodemailer from "nodemailer"

// async..await is not allowed in global scope, must use a wrapper
export default async tvShow => {
  /*
   * Generate test SMTP service account from ethereal.email
   * Only needed if you don't have a real mail account for testing
   */

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    auth: {
      pass: process.env.GMAIL_PASS,
      user: process.env.GMAIL_USER,
    },
    service: "Gmail",
  })

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Ramzan Chasygov" <theliketurbo@gmail.com>', // sender address
    subject: "New episode", // Subject line
    text: `Got a new episode of ${tvShow}`, // plain text body
    to: "Ramzan Chasygov <theliketurbo@gmail.com>", // list of receivers
  })

  // eslint-disable-next-line no-console
  console.log("Message sent: %s", info.messageId)
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}
