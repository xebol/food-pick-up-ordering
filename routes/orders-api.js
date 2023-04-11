const express = require('express');
const router = express.Router();
const orderQueries = require('../db/queries/orders');

router.get('/:id', (req, res) => {
  orderQueries.getOrdersByID()
    .then(orders => {
      res.json({ orders });
    })
    .catch(err => {
      res
      .status(500)
      .json({ error: err.message });
    });
  });

  router.delete('/:id', (req, res) => {
    const orderIDToDelete = req.params.id;
    console.log("REQ.PARAMS", req.params)
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
  console.log("REQ.BODY", req.body)
  //cart should be dealt with on the front end and then tallied and sent to the back end
  const newOrder = req.body;
  orderQueries
    .addOrder(newOrder)
    .then((order) => {
      res.send(order);
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});



module.exports = router;
