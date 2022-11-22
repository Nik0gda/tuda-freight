import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json({ message: "Email sent" });

  const { firstName, lastName, email, phoneNumber, homeZip, old, cdla } =
    req.body;

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com.",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "tuda.freight.email@gmail.com", // generated ethereal user
      pass: "acojsyadiakinnjg", // generated ethereal password
    },
  });

  // send mail with defined transport object
  await transporter.sendMail({
    from: "tuda.freight.email@gmail.com", // sender address
    to: "cebanu.dan3@gmail.com", // list of receivers
    subject: `New candidate: ${firstName} ${lastName}`, // Subject line
    text: `New candidate applied on tuda freight website:
      \nFirst name: ${firstName}
      \nLast name: ${lastName}
      \nEmail: ${email}
      \nPhone number: ${phoneNumber}
      \nHome zip: ${homeZip}
      \nIs 21 y.o: ${old}
      \nValid CDLA: ${cdla}

    `, // plain text body
  });

  // console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
