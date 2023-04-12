$(document).ready(function() {
  console.log('Document is ready: The Sequel');

  const placeOrder = function(item) {
    const $orderId = $(`
    <div class="order-item">
          <h2>${item.name}</h2>
          <div class="order-item-p">
            <p>-</p>
            <p>1</p>
            <p>+</p>
          </div>
          <i class="fa-solid fa-trash-can"></i>
        </div>
        `);
    return $orderId;
  };

  const renderItem = function(item) {
    const $menuItems = $('.order-items');
    $menuItems.empty();
    //loop through the orders
    let $orderItem = placeOrder(item);
    $menuItems.append($orderItem);

  };

  $('.items').on('click', '.icon', function() {
    console.log(this);
    let menuItemID;
    if ($(this).is('#1')) {
      menuItemID = 1;
    }
    if ($(this).is('#2')) {
      menuItemID = 2;
    }
    if ($(this).is('#3')) {
      menuItemID = 3;
    }
    if ($(this).is('#4')) {
      menuItemID = 4;
    }
    if ($(this).is('#5')) {
      menuItemID = 5;
    }
    if ($(this).is('#6')) {
      menuItemID = 6;
    }
    if ($(this).is('#7')) {
      menuItemID = 7;
    }
    if ($(this).is('#8')) {
      menuItemID = 8;
    }
    if ($(this).is('#9')) {
      menuItemID = 9;
    }
    if ($(this).is('#10')) {
      menuItemID = 10;
    }
    console.log('Menu Item ID: ', menuItemID);
    $.ajax({
      method: 'GET',
      url: `/api/menu_items/${menuItemID}`
    })
      .then((items) => {
        console.log('AJAX response: ', items);
        renderItem(items.item);
      });

  });
});

// When we push a particular button, we want the corresponding menu item to appear in the cart.
//Button id matches menu_items id.
