const client = require('../connection');

const getOrders = () => {
  return client.query('SELECT * FROM orders;')
    .then(orders => {
      return orders.rows;
    });
};


module.exports = { getOrders };

