use kj_product;
insert into products(id, site_code, title, price, thumnail, isSelling) select '', '00x', '', 0, '', true from dual where not exists (select * from products where id='' and title = '');