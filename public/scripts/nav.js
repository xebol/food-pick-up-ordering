$(document).ready(function() {

  console.log('Document is ready to use jQUery');

  const $pageNav = $('#nav-bar');
  function updateNav(user) {
    $pageNav.find(".nav-items").remove();
    let navLinks;

    if (!user) {
      navLinks = `
      <span class="logo"><img src="/images/luigichef.webp" alt="Image" width="110px" height="110px"></span>
      <div class="nav-items">
      <p><a href="#header">About</a></p>
      <p><a href="#menu">Menu</a></p>
      <p><a href="#reviews">Reviews</a></p>
      <p id="login">Login</p>
      </div>
      `;
      console.log('Please sign in');
    } else if (user.admin === true) {
      navLinks = `
      <span class="logo"><img src="/images/luigichef.webp" alt="Image" width="110px" height="110px"></span>
      <div class="nav-items">
      <p id="logout">Logout</p>
      </div>
      `;
      console.log('USER:', user.admin);
    } else {
      navLinks = `
      <span class="logo"><img src="/images/luigichef.webp" alt="Image" width="110px" height="110px"></span>
      <div class="nav-items">
      <p><a href="#header">About</a></p>
      <p><a href="#menu">Menu</a></p>
      <p><a href="#reviews">Reviews</a></p>
      <p id="logout">Logout</p>
      <p><i class="fa-solid fa-cart-shopping"></i></p>
      </div>
      `;
      console.log('USER:', user.admin);
    }

    $pageNav.append(navLinks);


  }

  checkLogIn()
    .then(function(json) {
      updateNav(json.user);
    });

  $('#nav-bar').on('click', '#logout', function() {
    logOut()
      .then((result) => {
        window.location.href = "http://localhost:8080/";
      })
      .catch((err) => {
        console.log(err);
      });

  });
});
