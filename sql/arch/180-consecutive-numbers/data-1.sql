truncate table Logs;
insert into Logs(id,num) values('1','1');
insert into Logs(id,num) values('2','1');
insert into Logs(id,num) values('3','1');
insert into Logs(id,num) values('4','2');
insert into Logs(id,num) values('5','1');
insert into Logs(id,num) values('6','2');
insert into Logs(id,num) values('7','2');
truncate table Expected;
insert into Expected(ConsecutiveNums) values('1');