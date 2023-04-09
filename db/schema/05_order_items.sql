
DROP TABLE IF EXISTS order_items CASCADE;
CREATE TABLE order_items (
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  menu_item_id INTEGER REFERENCES menu_items(id) ON DELETE CASCADE,
  quantity INTEGER NOT NULL
);
