
import axios from 'axios';

export default async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json', //not sure if I need this
      'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`
    }
  };

  console.log(`Authorization header: Bearer ${process.env.MAILERLITE_API_KEY}`);

  const body = {
    email: email,
    type: 'active'
  };

  try {
    await axios.post('https://connect.mailerlite.com/api/subscribers', body, config);
    return res.status(201).json({ error: '' });
  } catch (error) {
    if (error.response) {
      // Request made and server responded
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      return res.status(500).json({ error: error.response.data.error.message });
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
      return res.status(500).json({ error: 'No response received' });
    } else {
      // Something happened in setting up the request that triggered an error
      console.log('Error', error.message);
      return res.status(500).json({ error: error.message });
    }
  }
};


// import mailchimp from '@mailchimp/mailchimp_marketing';
 
// mailchimp.setConfig({
//   apiKey: process.env.MAILCHIMP_API_KEY,
//   server: process.env.MAILCHIMP_API_SERVER
// });
 
// export default async (req, res) => {
//   const { email } = req.body;
 
//   if (!email) {
//     return res.status(400).json({ error: 'Email is required' });
//   }
 
//   try {
//     await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
//       email_address: email,
//       status: 'subscribed',
//     });
 
//     return res.status(201).json({ error: '' });
//   } catch (error) {
//     return res.status(500).json({ error: error.message || error.toString() });
//   }
// };






