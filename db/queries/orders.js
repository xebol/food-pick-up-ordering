const client = require('../connection');

const getOrders = () => {
  return client.query('SELECT * FROM orders;')
    .then(orders => {
      return orders.rows;
    });
};

const addOrder = (order) => {
  return client
  .query(`INSERT INTO orders (id, customer_id, total_price)VALUES ($1, $2, $3) RETURNING *`,
  [order.customer_id, order.total_price, order.status])
   .then(order => {
    return order.rows[0];
   })
   .catch((err) => {
    console.log(err);
  });
}

module.exports = { getOrders, addOrder };

