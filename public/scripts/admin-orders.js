$(document).ready(function() {

  console.log('Document is ready to render orders');

  //Get admin-order-template from the DOM


  //Create each order item display
  const createOrder = function(order) {
    const $order = $(`
    <div class="admin-order-item">
    <h4>Order ${order.id}</h4>
    <div class="admin-order-buttons">
      <button type="submit" class=".button-confirm">Confirm</button>
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
      // $(`#${order.id}`).on('click', function() {


      //   let orderID = $(this).attr('id');
      //   alert(order.id);

      //   console.log(this);
      //   console.log('orderItem ID', orderID);

      // });
      sendConfirmation(order.id);
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
      }, 100);
    }).catch((err) => {
      console.log(err);
    });
  };

  //Load orders on initial load
  loadOrders();

  // $('.admin-order-template').on('click', '.button-confirm', function() {

  //   alert('Confirm button clicked');

  //   let orderID = $(this).attr('id');

  //   console.log(this);
  //   console.log('orderItem ID', orderID);

  // });

});


