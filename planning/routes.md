### FOOD ORDERING APP

<!-- Login Route -->
POST/login     customerLogin

<!-- Logout Route -->
POST/logout    customerLogout

<!-- Customer Orders Route -->
Browse GET/orders         getOrders
Read GET/orders:id        getOrderByID
Edit PATCH/orders/:id     editOrderByID
Add POST/orders           addOrder 
Delete DELETE orders/:id  deleteOrderByID

<!--Restaurant Admin Menu Items Route -->
Browse GET/menu_items           getMenuItems
Read GET/menu_items:id          getMenuItemByID
Edit PATCH/menu_items/:id       editMenuItemByID
Add POST/menu_items             addMenuItem
Delete DELETE menu_items/:id    deleteOrderById

<!-- Customer Reviews Route -->
Browse GET/reviews              getReviews
Read GET/reviews:id             getReviewByID
Edit PATCH/reviews/:id          editReviewByID
Add POST/reviews                addReview
Delete DELETE reviews/:id       deleteReview
