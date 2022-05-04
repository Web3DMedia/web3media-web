import { Client } from "@sendgrid/client"

export default async function verifyMailHandler(req, res) {
  const client = new Client()
  client.setApiKey(process.env.SENDGRID_API_KEY)

  if (!(req.method === "GET"))
    return res.status(404).json({
      message: "Resource not found!"
    })

  if (!process.env?.SENDGRID_CONTACT_LIST_ID) {
    return res.status(400).json({
      message: "Contact list not specified."
    })
  }

  const data = {
    list_ids: [process.env.SENDGRID_CONTACT_LIST_ID],
    contacts: [
      {
        first_name: "Ryan",
        last_name: "Kio",
        email: "ryan39@lee-young.com"
      }
    ]
  }

  const request = {
    url: `/v3/marketing/contacts`,
    method: "PUT",
    body: data
  }

  return await client
    // @ts-ignore
    .request(request)
    .then(() => {
      return res.status(200).json({ status: true, message: "Email verified" })
    })
    .catch(err => {
      console.info(JSON.stringify(err))
      return res.status(400).json({
        status: false,
        message: "Email verification failed!"
      })
    })
}
