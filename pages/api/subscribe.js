import mailchimp from '@mailchimp/mailchimp_marketing';
 
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER
});
 
export default async (req, res) => {
  const { email } = req.body;
 
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }
 
  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: 'subscribed',
    });
 
    return res.status(201).json({ error: '' });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};








// export default async (req, res) => {
//   const { email } = req.body;

//   console.log({ email });

//   if (!email) {
//     return res.status(400).json({ error: 'Email is required' });
//   }

//   try {
//     const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
//     const API_KEY = process.env.MAILCHIMP_API_KEY;
//     const DATACENTER = process.env.MAILCHIMP_API_SERVER;
//     const data = {
//       email_address: email,
//       status: 'subscribed',
//     };

//     const response = await fetch(
//       `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,

//       {
//         body: JSON.stringify(data),
//         headers: {
//           Authorization: `apikey ${API_KEY}`,
//           'Content-Type': 'application/json',
//         },
//         method: 'POST',
//       }
//     );

//     if (response.status >= 400) {
//       return res.status(400).json({
//         error: `There was an error subscribing to the newsletter.
//         Hit me up peter@peterlunch.com and I'll add you the old fashioned way :(.`,
//       });
//     }

//     return res.status(201).json({ error: '' });
//   } catch (error) {
//     return res.status(500).json({ error: error.message || error.toString() });
//   }
// };



// const NewSubscriber = (props) => {

//     const email = props.email
//     addNewSubscriber()

//     async function addNewSubscriber() {

//         const response = await fetch('https://benworrall.us15.list-manage.com/subscribe/post?u=94fed600b76a7c2c0773c6815&amp;id=45839a09af&amp;f_id=00af92e0f0', {
//          method: 'POST',
//          body: JSON.stringify(email),
//          headers: {
//             'Content-Type': 'application/json'
//             }
//         }
//         )

//         const data = await response.json()

//         console.log(data)

//     }


// }

// export default NewSubscriber