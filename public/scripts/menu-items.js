
$(document).ready(function() {
  $.ajax({
    method: 'GET',
    url: '/api/menu_items' //extract the id from the target
  })
    .done((items) => {

      renderOrders(items.items);
    });

  //dynamically creating the menus on the front end
  const createOrder = function(item) {
    const $item = (`
        <article class="item">
        <div class="details">
          <h2>${item.name}</h2>
          <p>${item.description}.</p>
          <p>¢${item.price}</p>
        </div>
        <div class="img">
          <img src="${item.food_image_name}" alt="Image" width="110px" height="110px">
          <p>Add <i class="fa-solid fa-cart-shopping icon" id="${item.id}"></i></p>
        </div>
      </article>`);

    return $item;

  };
  const renderOrders = function(items) {
    const $menuList = $('.items');
      $menuList.empty();
    //loop through the orders
    for (const item of items) {
      //call createOrder on each item
      let $orderItem = createOrder(item);
      $menuList.append($orderItem);
    }
  };
});


