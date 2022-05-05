import { Client } from "@sendgrid/client"
import { verifyUser } from "../../libs/supabase"

const redirectTo = (res, url, message) => {
  res.status(302).setHeader("Location", url).json({
    message
  })
}

export default async function verifyMailHandler(req, res) {
  if (!(req.method === "GET"))
    return res.status(404).json({
      message: "Resource not found!"
    })

  if (!process.env?.SENDGRID_CONTACT_LIST_ID) {
    return res.status(400).json({
      message: "Contact list not specified."
    })
  }

  const unverified = () =>
    redirectTo(
      res,
      process.env.NEXT_PUBLIC_BASE_URL + "?verified=false",
      "Email verification failed!"
    )

  const client = new Client()
  client.setApiKey(process.env.SENDGRID_API_KEY)

  const user = await verifyUser({
    code: req.query["verification-code"] || ""
  }).catch(err => {
    console.error("Verify failed!", err.message)
    return unverified()
  })

  const data = {
    list_ids: [process.env.SENDGRID_CONTACT_LIST_ID],
    contacts: [
      {
        first_name: user.name,
        email: user.email
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
      return redirectTo(
        res,
        process.env.NEXT_PUBLIC_BASE_URL + "?verified=true",
        "Verification success"
      )
    })
    .catch(err => {
      return unverified()
    })
}
