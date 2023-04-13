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

//set up code that responds to a get request '/api/reviews'
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
  const userId = req.session.userId;
  //Using bodyParser = require('body-parser') in server.js
  //cart should be dealt with on the front end and then tallied and sent to the back end
  const temp = req.body;
  // console.log("TEMP", temp);
  let newReview = {
    customer_id: userId,
    message: req.body.reviewMessage,
    rating: 4, //Hardcoded
    date: '2023-04-11' //Harcoded
  };
  console.log("NEW REVIEW", newReview);
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
