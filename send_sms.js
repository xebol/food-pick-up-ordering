// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = 'ACed1ee8ee5825b6a4ba593a96f17b7d41';
const authToken = '42a3593ec68df81c48eabe4d32b9b011';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+15075167661',
     to: '+15148338334'
   })
  .then(message => console.log(message.sid));
