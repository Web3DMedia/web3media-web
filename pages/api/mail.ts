const mail = require('@sendgrid/mail')


mail.setApiKey(process.env.SENGRID_API_KEY)

export default function mailHandler(req, res) {
   const body = JSON.parse(req.body)
   const msg = {
      to: `${body.email}`,
      from: {
         email:'hello@web3d.media',
         name: 'Web3D',
      },
      templateId: 'd-681ec1e40ac04e159dc8b918a31d3be'
   };

   mail
      .send(msg)
      .then(() => {}, error => {
         console.error(error);

         if (error.response) {
            console.error(error.response.body)
         }
      });

   
   res.status(200).json()
}
