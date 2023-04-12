
$(document).ready(function() {

  $('.icon').on('click', () => {
    $.ajax({
      method: 'GET',
      url: '/api/menu_items'
    })
      .done((response) => {
        console.log('response', response)
        const $orderList = $('.order-items')
        $orderList.empty();

        $orderList.append(`<h2>${response.items[2].name}</h2>`)
      });

  });
});
