const logOut = () => {
  console.log('Signing out...')
  return $.ajax({
    method: 'POST',
    url: '/api/logout'
  });
};

