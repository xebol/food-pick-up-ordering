const client = require('../connection');

const getOrders = () => {
  return client.query('SELECT * FROM orders')
    .then(orders => {
      return orders.rows;
    });
};

const getOrdersByID = (id) => {
  return client.query('SELECT order_items.* FROM orders JOIN order_items ON order_id = orders.id WHERE order_id = $1', [id])
    .then(order => {
      console.log('getOrders function', order.rows)
      return order.rows;
    });
};

const addOrder = (order) => {
  return client
    .query(`INSERT INTO orders (customer_id, total_price, status)VALUES ($1, $2, $3) RETURNING *`,
      [order.customer_id, order.total_price, order.status])
    .then(order => {
      return order.rows[0];
    })
    .catch((err) => {
      console.log(err);
    });
};

const addItemToOrder = (orderId, menuItemId, quantity) => {
  return client
    .query(`INSERT INTO order_items (order_id, menu_item_id, quantity)
VALUES (${orderId}, ${menuItemId}, ${quantity}) RETURNING *`)
    .then((item) => {
      return item.rows[0];
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteOrderByID = (id) => {
  return client
    .query(`DELETE FROM orders WHERE id = $1`, [id])
    .then(order => {
      return order.rows;
    })
    .catch((err) => {
      console.log(err);
    });
};


module.exports = { getOrders, addOrder, deleteOrderByID, getOrdersByID, addItemToOrder};

