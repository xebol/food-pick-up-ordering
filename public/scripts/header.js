$(document).ready(function() {

  console.log('Document is ready to use header');

  const $pageHeader = $('#header');
  function updateHeader(user) {
    console.log('Updating header...');
    let headerMessage;

    if (!user) {
      headerMessage = `
      <h1 id="luigis">Luigi's</h1>
      <h6 id="about-us-header">About Us</h6>
      <p id="desc" style="text-align: justify">

        Luigi's restaurant in the Mushroom Kingdom is a delightful dining spot that
        offers a unique experience to its visitors. The restaurant is the latest venture of Luigi,
        a beloved figure in the kingdom, known for his skills as a plumber, doctor, ghost hunter, racecar driver,
        pro tennis player and MUCH more.
        <br>
        <br>
        Now, Luigi brings his love for exploration and his passion for quality food to his restaurant.
        The menu features dishes made with locally-sourced ingredients that highlight the
        flavors of the Mushroom Kingdom. From classic linguini to innovative creations like Dry Bone's Marrow,
        the dishes are expertly crafted and bursting with flavors.
      </p>`;
    } else if (user.admin) {
      headerMessage = `
      <h1 id="luigis-admin">Welcome Back, Chef!</h1>
      <h2 class="orders">Current Orders</h2>
      <article class="admin-order-template">

      </article>`;
    } else {
      headerMessage = `
      <h1 id="luigis">Luigi's</h1>
      <h6 id="about-us-header">About Us</h6>
      <p id="desc" style="text-align: justify">

        Luigi's restaurant in the Mushroom Kingdom is a delightful dining spot that
        offers a unique experience to its visitors. The restaurant is the latest venture of Luigi,
        a beloved figure in the kingdom, known for his skills as a plumber, doctor, ghost hunter, racecar driver,
        pro tennis player and MUCH more.
        <br>
        <br>
        Now, Luigi brings his love for exploration and his passion for quality food to his restaurant.
        The menu features dishes made with locally-sourced ingredients that highlight the
        flavors of the Mushroom Kingdom. From classic linguini to innovative creations like Dry Bone's Marrow,
        the dishes are expertly crafted and bursting with flavors.
      </p>`;
    }

    $pageHeader.append(headerMessage);


  }

  checkLogIn()
    .then(function(json) {
      console.log('Header checklogin response', json);
      updateHeader(json.user);
    });



});



