$(document).ready(function() {


  function addReview() {
    console.log("addToCart");
    return $.ajax({
      type: "POST",
      url: "/api/reviews",
    });

  }

 


});
