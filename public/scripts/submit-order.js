$(document).ready(function() {

  console.log('Submit Order');

  //store the form in a jquery variable
  const $form = $('#submit');

  $form.on('submit', (event) => {
    event.preventDefault();

    //When order is submitted clear the cart
    const $clearCart = $('.order-item');
    $clearCart.empty();

    $.ajax({
      method: 'GET',
      url: '/api/orders'
    })
      .then((response) => {
        console.log('response', response);
        console.log('Cart Items', localStorage);
        console.log(JSON.parse(localStorage.getItem('2')));
      });

  });

});
