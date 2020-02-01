show databases;
create database kj_product;
use kj_product;
show tables;
-- drop table product_list;

create table product_list (
	id integer not null auto_increment,
    site_code varchar(10) not null,
    title varchar(100) not null,
    price integer not null,
    thumnail varchar(200),
    primary key(id)
);

alter table product_list convert to charset utf8;
select * from product_list;
