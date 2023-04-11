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

