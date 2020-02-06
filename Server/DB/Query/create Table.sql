-- create database kj_product;
use kj_product;
drop table product_list;

create table product_list (
	id varchar(20) not null,
    site_code varchar(5) not null,
    title varchar(100) not null,
    price integer not null,
    thumnail varchar(200),
    primary key(id, site_code)
);

alter table product_list convert to charset utf8;
select * from product_list;
