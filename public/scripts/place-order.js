$(document).ready(function() {
  console.log('Document is ready: The Sequel');
  //clear the browser storage
  localStorage.clear();

  const placeOrder = function(item) {
    const $orderId = $(`
    <div class="order-item" id="removeItem">
          <h2>${item.name}</h2>
          <div class="order-item-p">
            <p>-</p>
            <p>1</p>
            <p>+</p>
          </div>
          <i id="${item.id}" class="fa-solid fa-trash-can"></i>
        </div>
        `);
    return $orderId;
  };

  const renderItem = function(item) {
    const $menuItems = $('.order-items');
    let $orderItem = placeOrder(item);
    $menuItems.append($orderItem);

  };

  $('.items').on('click', '.icon', function() {
    let menuItemID = $(this).attr('id');

    $.ajax({
      method: 'GET',
      url: `/api/menu_items/${menuItemID}`
    })
      .then((items) => {
        //to store an data to the browser storage, turn it into a string
        localStorage.setItem(`${menuItemID}`, JSON.stringify(items));
        // const retrievedObject = JSON.parse(localStorage.getItem(`${menuItemID}`));
        // console.log('retrievedObject', retrievedObject);
        renderItem(items.item);
      });

  });

  $('.cart').on('click', '.fa-trash-can', function() {
    let itemToDelete = $(this).attr('id');
    //Remove item from localStorage
    localStorage.removeItem(itemToDelete);
    //Empty order-item container
    $(this).parent().empty();
    // console.log('Updated localStorage', localStorage);
  });

});


