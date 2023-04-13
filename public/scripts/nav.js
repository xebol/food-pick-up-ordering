$(document).ready(function() {

  const $pageNav = $('#nav-bar');
  function updateNav(user) {
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
    } else if (user.admin === true) {
      navLinks = `
      <span class="logo"><img src="/images/luigichef.webp" alt="Image" width="110px" height="110px"></span>
      <div class="nav-items">
      <p id="logout">Logout</p>
      </div>
      `;
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
    }

    $pageNav.append(navLinks);


  }

  checkLogIn()
    .then(function(json) {
      updateNav(json.user);
    });

  $('#nav-bar').on('click', '#logout', function() {
    logOut()
      .then(() => {
        window.location.href = "http://localhost:8080/";
      })
      .catch((err) => {
        console.log(err);
      });

  });
});
