import mail from "@sendgrid/mail"
import randomatic from "randomatic"
import { addUserToWaitlist } from "../../libs/supabase"

export default async function mailHandler(req, res) {
  mail.setApiKey(process.env.SENDGRID_API_KEY)

  if (!(req.method === "POST"))
    return res.status(404).json({
      message: "Resource not found!"
    })

  const code = randomatic("0A", 8)
  const { body } = req

  await addUserToWaitlist({
    name: body.name,
    email: body.email,
    code: code
  }).catch(err => {
    console.error(err.message)
    if (err.message.includes("User already exist"))
      res.status(400).json({
        message:
          "Already signed up. Please check your email inbox for a confirmation email",
        status: false,
        code: 400
      })

    res.status(400).json({
      message: "Unable to add details to record",
      status: false,
      code: 400
    })

    throw err
  })

  const msg = {
    to: body.email,
    from: {
      email: process.env.MAIL_SENDER,
      name: process.env.MAIL_SENDER_TITLE
    },
    dynamic_template_data: {
      name: body.name,
      verificationLink: `${process.env.NEXT_PUBLIC_BASE_URL}/api/verifyMail?verification-code=${code}`
    },
    templateId: process.env.EMAIL_TEMPLATE_ID
  }

  return await mail
    .send(msg)
    //   return Promise.reject()
    .then(() => {
      res.status(200).json({
        message: "Signed up successfully"
      })
    })
    .catch(err => {
      console.error(err.response.body.errors, {
        SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
        MAIL_SENDER_TITLE: process.env.MAIL_SENDER_TITLE,
        MAIL_SENDER: process.env.MAIL_SENDER,
        EMAIL_TEMPLATE_ID: process.env.EMAIL_TEMPLATE_ID
      })

      return res.status(400).json({
        message: "Signup not acknowledged. Please try again later",
        status: false,
        errors: err.response,
        code: 400
      })
    })
}
