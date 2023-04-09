-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS customers CASCADE;
CREATE TABLE customers (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email_address TEXT NOT NULL,
  admin_access boolean,
  password VARCHAR(255) NOT NULL
);
