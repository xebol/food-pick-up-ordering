// require('dotenv').config()
$(document).ready(function() {

  console.log('Submit Order');

  //store the form in a jquery variable
  const $form = $('#submit');

  $form.on('submit', (event) => {
    //do not refresh the page
    event.preventDefault();

    const data = { ...localStorage };

    console.log('data', data);
    const parsedData = [];

    for (const itemId in data) {
      parsedData.push(JSON.parse(data[itemId]));
    }
    console.log('data', parsedData);

    $.ajax({
      method: 'POST',
      url: '/api/orders',
      data: JSON.stringify(parsedData),
      contentType: "application/json"
    })
      .then((response) => {
        alert('Order submitted successfully');
        console.log('Response', response);
        //When order is submitted clear the cart
        const $clearCart = $('.order-item');
        $clearCart.empty();

      });
  });
});
