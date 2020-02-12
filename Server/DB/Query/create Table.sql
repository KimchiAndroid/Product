-- create database kj_product;
show databases;
use kj_product;
show tables;
-- drop table products;

create table products (
	id varchar(20) not null,
    site_code varchar(5) not null,
    title varchar(100) not null,
    price integer not null,
    thumnail varchar(200),
    isSelling boolean,
    primary key(id, site_code)
);

alter table products convert to charset utf8;
select * from products;
