select * from users
inner join order1 on users.id = order1.who
inner join address on users.id = address.who
where users.id = 1
--68D