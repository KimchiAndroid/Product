-- create database kj_product;
use kj_product;
drop table keyword;

create table keyword (
    keyword varchar(20) not null,
    primary key(keyword)
);

alter table keyword convert to charset utf8;
