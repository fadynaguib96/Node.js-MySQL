DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ('Soccer ball', 'Sports', 8.00, 1000),
		('Basket ball', 'Sports', 10.50, 850),
		('Volley ball', 'Sports', 6.50, 450),
		('Tennis Balls', 'Sports', 4.25, 400),
		('Brownies', 'Groceries', 3.50, 600),
		('Coke Cola', 'Beverages', 2.20, 1000),
		('Tropicana Orange Juice', 'Groceries', 5.55, 300),
		('Oreo Cookies', 'Groceries', 4.25, 300),
		('Bananas', 'Groceries', 3.75, 500),
		('Apples', 'Groceries', 4.00, 575),
		