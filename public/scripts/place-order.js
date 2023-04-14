$(document).ready(function() {
  //clear the browser storage
  localStorage.clear();

  const placeOrder = function(item) {
    const $orderId = $(`
    <div class="order-item" id="removeItem">
          <h2>${item.name}</h2>
          <div class="order-item-p">
            <p>-</p>
            <p class="quantity">1</p>
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
      .then((response) => {
        const itemExist = localStorage.getItem(menuItemID);
        const itemObj = itemExist? JSON.parse(itemExist) : response;

       //add to quantity
       console.log('itemObj', itemObj)
       itemObj.item.quantity = (itemObj.item.quantity || 0) + 1;
       localStorage.setItem(`${menuItemID}`, JSON.stringify(itemObj));


        //to store data to the browser storage, turn it into a string
        // const retrievedObject = JSON.parse(localStorage.getItem(`${menuItemID}`));
        // console.log('retrievedObject', retrievedObject);
        renderItem(itemObj.item);
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


