const express = require('express');
const router = express.Router();
const loginQueries = require('../db/queries/login');

router.get('/:id', (req, res) => {
  const userId = req.params.id;
  loginQueries.getCustomerByID(userId)
    .then((user) => {
      if (!user) {
        return res.send({ error: "no user with that id" });
      }

      req.session.userId = user.id;
      console.log(`${user.name} successfully logged in`);
      // res.send({
      //   id: user.id,
      //   name: user.name,
      //   email: user.email_address,
      //   admin: user.admin_access
      //  });
      res.redirect('/')
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;

