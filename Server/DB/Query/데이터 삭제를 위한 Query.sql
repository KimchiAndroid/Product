use kj_product;
-- 전체삭제
truncate products;
-- 키워드 별 삭제
set sql_safe_updates = 0;
delete from products where title like "% %";