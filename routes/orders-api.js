require('dotenv').config();
const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const orderQueries = require('../db/queries/orders');

//Twilio
const accountSid = process.env.DB_ACC_SID;
const authToken = process.env.DB_AUTH_KEY;
const client = require('twilio')(accountSid, authToken);

router.get('/:id', (req, res) => {
  // const id = req.params.id;
  // orderQueries.getOrdersByID(id)
    orderQueries.getOrders()
    .then(() => {
      return client.messages
        .create({
          body: `It'sa me, Luigi! Ha ha! Your order will be available for pick up in approximately 25 minutes. See you then!`,
          from: '+15075167661',
          to: '+15148338334'
        });
    })
    .then(() => {
      return res.send('Order was placed successfully!');
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.delete('/:id', (req, res) => {
  const orderIDToDelete = req.params.id;
  console.log("REQ.PARAMS", req.params);
  orderQueries
    .deleteOrderByID(orderIDToDelete)
    .then((order) => {
      res.send(order);
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});

//set up code that responds to a get request '/api/orders'
router.get('/', (req, res) => {
  orderQueries.getOrders()
    .then(orders => {
      res.json({ orders });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});


//set up code that responds to a post request '/api/orders'
router.post('/', (req, res) => {
  //Using bodyParser = require('body-parser') in server.js
  // console.log("REQ.BODY", req.body);
  //cart should be dealt with on the front end and then tallied and sent to the back end
  const newOrder = {
    customer_id: 1,
    total_price: 1700,
    status: 'cart'
  };
  orderQueries
    .addOrder(newOrder)
    .then((order) => {
      console.log('order', order.id);
      return order.id;
    })
    .then((orderId) => {

      const itemsToOrderQueries = [];

      const itemsSelected = req.body;
      console.log('ItemSelected', itemsSelected);

      for (const item of itemsSelected) {
        const itemObj = item.item;
        //add items to order-items table
        itemsToOrderQueries.push(orderQueries.addItemToOrder(orderId, itemObj.id, itemObj.quantity));
      }

      const orderPlaced = Promise.all(itemsToOrderQueries);

      return orderPlaced;

    })
    .then(() => {
      return client.messages
        .create({
          body: 'DYNAMIC CODE HERE FOR ORDER',
          from: '+15075167661',
          to: '+15148338334'
        });
    })
    .then(message => {
      console.log(message.sid);
      //clears the cart once the order is submitted
      return res.send('Order was placed successfully!');
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});





module.exports = router;
