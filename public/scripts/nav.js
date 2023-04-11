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

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
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
