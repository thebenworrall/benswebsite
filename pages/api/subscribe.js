
import axios from 'axios';

export default async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address' });
  }

  

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json', //not sure if I need this
      'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`
    }
  };

  // API key logged for debugging (removed for security)

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
      // Error response logged for debugging
      return res.status(500).json({ error: error.response.data.error.message });
    } else if (error.request) {
      // The request was made but no response was received
      // Request error logged for debugging
      return res.status(500).json({ error: 'No response received' });
    } else {
      // Something happened in setting up the request that triggered an error
      // General error logged for debugging
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






