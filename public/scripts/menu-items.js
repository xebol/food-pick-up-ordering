
$(document).ready(function() {

  $('.menu-items').on('click', () => {
    $.ajax({
      method: 'GET',
      url: '/api/menu_items'
    })
      .done((response) => {
        console.log(response)
        const $orderList = $('.order-items')
        $orderList.empty();

        $orderList.append(`<h2>${response.orders[0].id}</h2>`);

      //   for (const order of response.orders) {
      //     $orderList.append(`<h2>${order.id}</h2>`);
      //   }
      });
  });
});
