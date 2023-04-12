$(document).ready(function() {
  //hiding error messages
  // $('#error-message').hide();

  const renderReviews = function(reviews) {
    $('.reviews').empty();
    // loops through reviews
    for (const review of reviews.reviews) {
      // calls createreviewElement for each review
      const $review = createReviewElement(review);
      // takes return value and appends it to the reviews container
      $('.reviews').prepend($review);
    }
  };

  const loadReviews = function() {
    //gets the reviews from /api/reviews and renders them on the page
    $.ajax({
      method: 'GET',
      url: '/api/reviews',
    }).then((reviews) => {
      console.log("reviews from db", reviews)
      renderReviews(reviews);
    });
  };
  loadReviews();

  //a helper function to make calling errors easier.
  // const displayError = function(message) {
  //   $('#error-message').html(message);
  //   return $('#error-message').slideDown(400);
  // };
  //makes a review object that is then passed to the database
  const createReviewElement = function(review) {

  console.log("REVIEW", review)
    //timestamps
    const timeAgo = timeago.format(review.created_at);

    //escapes the user input for security
    function escape(string) {
      let div = document.createElement("div");
      div.appendChild(document.createTextNode(string));
      return div.innerHTML;
    };

    const dynamicReview =  `<div class="review">
      <h3>${escape(review.name)}</h3>
      <p>${escape(review.message)}</p>
      <p>${timeAgo}</p>
      </div>`
      return dynamicReview;

    };

  //submit button logic
  $('#review-form').on('submit', (event) => {
    // $('#review-form').val('');
  // console.log("BUTTON TEST")
    //stops the browser sunning default operations
    event.preventDefault();
    //error message triggers
    // const $reviewLength = $('textarea').val().length;

    // if ($reviewLength <= 0) {
    //   return displayError("Please leave us a review!");
    // }
    //turns encoded url into a serialized string
    const encodedURL = $('#review-form').serialize();
    console.log("encodedURL", encodedURL)
    $('#review-text').val('');
      //ajax method to actually post the created tweet after the button has been pressed
      $.ajax({
        method: 'POST',
        url: '/api/reviews',
        data: encodedURL,
      }).then((response) => {
        console.log("TEST", response)
        loadReviews();
        // $('#error-message').slideUp(400);
      }).catch((err) => {
        console.log('ERROR')
        // return displayError("Something went wrong! please try again.");
      });
  });

});
