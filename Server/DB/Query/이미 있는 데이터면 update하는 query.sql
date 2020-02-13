use kj_product;
INSERT INTO products VALUES ('', '00x', '', 0, '', true) ON DUPLICATE KEY UPDATE price = 100, isSelling = true;
