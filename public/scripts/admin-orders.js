$(document).ready(function() {

  console.log('Document is ready to render orders');

  //Get admin-order-template from the DOM


  //Create each order item display
  const createOrder = function(order) {
    const $order = $(`
    <div class="admin-order-item">
    <h4>Order ${order.id}</h4>
    <div class="admin-order-buttons">
      <button>Confirm</button>
      <button>Complete</button>
    </div>
    </div>
        `);
    return $order;
  };

  //Loop through all orders, creating HTML with each, and add to orderContainer
  const renderOrders = function(orders) {
    const $orderContainer = $('.admin-order-template');
    for (const order of orders.orders) {
      const $order = createOrder(order);
      console.log('renderOrders $order', $order);
      $orderContainer.append($order);
    }
  };

  const loadOrders = function() {
    // alert('TEST')
    $.ajax({
      method: 'GET',
      url: '/api/orders'
    }).then((orders) => {
      //Remove all children from orderContainer;
      setTimeout(() => {
        renderOrders(orders);
      }, 100)
    }).catch((err) => {
      console.log(err);
    });
  };

  //Load orders on initial load
  loadOrders();

});

// const createTweet = (tweet) => {
//   //Prevent XSS and safely render insecure text
//   const escape = function(str) {
//     let div = document.createElement("div");
//     div.appendChild(document.createTextNode(str));
//     return div.innerHTML;
//   };


//   const $tweet = $(`
//   <article class="tweet">
//       <header class="tweet-header">
//         <div class="tweet-header-fullname">
//           <img src="${escape(tweet.user.avatars)}">
//           <p>${escape(tweet.user.name)}</p>
//         </div>
//         <div class="tweet-header-username">
//           <p>${escape(tweet.user.handle)}</p>
//         </div>
//       </header>
//       <article class="tweet-text">
//         <p>${escape(tweet.content.text)}</p>
//       </article>
//       <footer class="tweet-footer">
//         <div class="tweet-footer-days">
//           <p>${escape(timeago.format(tweet.created_at))}</p>
//         </div>
//         <div class="tweet-footer-icons">
//           <i class="fa-solid fa-flag"></i>
//           <i class="fa-solid fa-retweet"></i>
//           <i class="fa-solid fa-heart"></i>
//         </div>
//       </footer>
//     </article>
//     `);

//   return $tweet;
// };

// const loadTweets = function() {
//   $.ajax({
//     method: 'GET',
//     url: '/tweets'
//   }).then((tweets) => {

//     //Remove all children from #tweet-container
//     $tweetContainer.empty();
//     renderTweets(tweets);
//   });
// };

// //Load tweets on initial load
// loadTweets();

