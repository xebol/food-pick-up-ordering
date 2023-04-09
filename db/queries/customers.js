const client = require('../connection');

const getCustomers = () => {
  return client.query('SELECT * FROM customers;')
    .then(customers => {
      return customers.rows;
    });
};

const getCustomerByID = (id) => {
  return client.query('SELECT * FROM customers WHERE id = $1;', [id])
    .then((customers) => {
      const customer = customers.rows[0];
      return customer;
    });
};

module.exports = {
  getCustomers,
  getCustomerByID
};
