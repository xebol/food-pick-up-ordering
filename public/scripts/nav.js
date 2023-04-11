$(document).ready(function() {

  console.log('Document is ready to use jQUery');

  $("#logout").on('click', function() {
    $.ajax({
      method: 'POST',
      url: '/api/logout'
    })
      .then(() => {
        console.log('You have successfully logged out');
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
