const express = require('express');
const router = express.Router();
const menuItemsQueries = require('../db/queries/menu_items');

//Get all menu items
router.get('/', (req, res) => {
  menuItemsQueries.getAllMenuItems()
    .then(items => {
      res.json({ items });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

//Get a menu item by ID
router.get('/:id', (req, res) => {
  const menuItemID = req.params.id;
  menuItemsQueries.getMenuItemByID(menuItemID)
    .then(item => {
      res.json({ item });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

//set up code that responds to a post request '/api/menu_items'
router.post('/', (req, res) => {
  //Using bodyParser = require('body-parser') in server.js
  console.log('REQ.BODY', req.body);
  //cart should be dealt with on the front end and then tallied and sent to the back end
  const newMenuItem = req.body;
  menuItemsQueries
    .addMenuItem(newMenuItem)
    .then((item) => {
      console.log('Newly-added item: ', item);
      res.send(item);
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});

router.delete('/:id', (req, res) => {
  console.log('REQ.BODY', req.params.id);
  const menuItemID = req.params.id;
  menuItemsQueries
    .deleteMenuItemByID(menuItemID)
    .then(item => {
      console.log('Item successfully deleted');
      res.send(item);
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});

module.exports = router;


