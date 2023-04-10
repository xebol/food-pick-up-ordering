const express = require('express');
const router = express.Router();
const reviewQueries = require('../db/queries/reviews');

router.get('/:id', (req, res) => {
  reviewQueries.getReviewByID()
    .then(review => {
      res.json({ review });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

//set up code that responds to a get request '/api/orders'
router.get('/', (req, res) => {
  reviewQueries.getReviews()
    .then(reviews => {
      res.json({ reviews });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});


router.post('/', (req, res) => {
  //Using bodyParser = require('body-parser') in server.js
  //cart should be dealt with on the front end and then tallied and sent to the back end
  const newReview = req.body;
  reviewQueries
    .addReview(newReview)
    .then((review) => {
      res.send(review);
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});

router.put('/:id', (req, res) => {
  const reviewIDToEdit = req.params.id;
  const newReview = req.body;
  reviewQueries
    .editReviewByID(reviewIDToEdit, newReview)
    .then((review) => {
      res.send(review);
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});

router.delete('/', (req, res) => {

  const newReview = req.body.id;
  reviewQueries
    .deleteReviewByID(newReview)
    .then((order) => {
      res.send(order);
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});


module.exports = router;
