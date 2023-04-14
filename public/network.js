function checkLogIn() {
  console.log("Welcome to Luigi's!");
  return $.ajax({
    method: 'GET',
    url: "/api/customers/me",
  });
}

const logOut = () => {
  console.log('Signing out...');
  return $.ajax({
    method: 'POST',
    url: '/api/logout'
  });
};

const sendConfirmation = function(id) {
  $(`#${id}`).on('click', function() {
    console.log(this);
    $.ajax({
      method: 'GET',
      url: `/api/orders/${id}`
    })
      .then((response) => {
        console.log('ADMIN AJAX RESPONSE', response);
      });

  });
};
