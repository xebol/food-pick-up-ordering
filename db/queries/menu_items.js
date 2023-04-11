const client = require('../connection');

//Get all menu items
const getAllMenuItems = function() {
  return client
    .query('SELECT * FROM menu_items')
    .then(items => {
      return items.rows;
    })
    .catch((err) => {
      console.log(err);
    });
};

//Get an menu item by its ID
const getMenuItemByID = function(id) {
  return client
    .query('SELECT * FROM menu_items WHERE id = $1;', [id])
    .then(item => {
      return item.rows[0];
    })
    .catch((err) => {
      console.log(err);
    });
};

//Edit a menu item
const editMenuItemByID = (id, item) => {
  return client.query('UPDATE menu_items SET description = $1, price = $2 WHERE id = $3 RETURNING *',
  [item.description, item.price, id])
    .then(reviews => {
      return reviews.rows;
    });
};

//Add a menu item
const addMenuItem = function(item) {
  return client
    .query('INSERT INTO menu_items (name, description, price) VALUES($1, $2, $3) RETURNING *',
      [item.name, item.description, item.price])
    .then(item => {
      return item.rows[0];
    })
    .catch((err) => {
      console.log(err);
    });
};

//Delete a menu item
const deleteMenuItemByID = function(id) {
  return client
    .query('DELETE FROM menu_items WHERE id = $1;', [id])
    .then(items => {
      return items.rows;
    })
    .catch((err) => {
      console.log(err);
    });
}



module.exports = {
  getAllMenuItems,
  getMenuItemByID,
  editMenuItemByID,
  addMenuItem,
  deleteMenuItemByID
}

