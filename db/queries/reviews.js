const client = require('../connection');

const getReviews = () => {
  return client.query('SELECT *, customers.name FROM reviews JOIN customers ON customers.id = customer_id')
    .then(reviews => {
      return reviews.rows;
    });
};

const getReviewByID = (id) => {
  return client.query('SELECT *, customers.name FROM reviews JOIN customers ON customers.id = customer_id WHERE id = $1', [id])
    .then(reviews => {
      return reviews.rows;
    });
};

const editReviewByID = (id, review) => {
  return client.query('UPDATE reviews SET message = $1, rating = $2 WHERE id = $3 RETURNING *',
  [review.message, review.rating, id])
    .then(reviews => {
      return reviews.rows;
    });
};

const addReview = (review) => {
  return client
  .query(`INSERT INTO reviews (customer_id, message, rating, date)VALUES ($1, $2, $3, $4) RETURNING *`,
  [review.customer_id, review.message, review.rating, review.date])
   .then(review => {
    return review.rows[0];
   })
   .catch((err) => {
    console.log(err);
  });
}

const deleteReviewByID = (id) => {
return client
.query(`DELETE FROM reviews WHERE reviews.id = $1`, [id])
.then(review => {
  return review.rows;
 })
 .catch((err) => {
  console.log(err);
});
}


module.exports = { getReviews, addReview, deleteReviewByID, getReviewByID, editReviewByID };

