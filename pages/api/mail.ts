const mail = require("@sendgrid/mail")

export default async function mailHandler(req, res) {
  mail.setApiKey(process.env.SENDGRID_API_KEY)

  if (!(req.method === "POST"))
    return res.status(404).json({
      message: "Resource not found!"
    })

  const { body } = req
  const msg = {
    to: body.email,
    from: {
      email: process.env.MAIL_SENDER,
      name: process.env.MAIL_SENDER_TITLE
    },
    dynamic_template_data: {
      name: body.name
    },
    templateId: process.env.EMAIL_TEMPLATE_ID
  }

  return await mail
    .send(msg)
    //   return Promise.reject()
    .then(() =>
      res.status(200).json({
        message: "Signed up successfully"
      })
    )
    .catch(err => {
      return res.status(400).json({
        message: "Signup not acknowledged. Please try again later",
        status: false,
        code: 400
      })
    })
}
