show databases;
use joongna_test;
show tables;

create table joongnatest (
id integer not null auto_increment primary key,
site varchar(20) not null,
name varchar(50) not null,
price integer,
images varchar(200),
detail varchar(200),
origin_url varchar(100),
etc varchar(50)
);

alter table joongnatest convert to charset utf8;
select * from joongnatest where name like "%아이유%" and site = "joongna";