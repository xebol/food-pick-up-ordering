// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
require('dotenv').config()

const accountSid = process.env.DB_ACC_SID;
const authToken = process.env.DB_AUTH_KEY;
const client = require('twilio')(accountSid, authToken);

const text = client.messages
  .create({
     body: 'DYNAMIC CODE HERE FOR ORDER',
     from: '+15075167661',
     to: '+15148338334'
   })
  .then(message => console.log(message.sid));

module.export = { text }
