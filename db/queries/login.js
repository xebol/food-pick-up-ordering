const client = require('../connection');

const getCustomerByID = function(id) {
  return client.query('SELECT * FROM customers WHERE id = $1;', [id])
    .then(customer => {
      return customer.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { getCustomerByID };
