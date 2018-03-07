SELECT * FROM users
where id > $1
and id != $1
-- 107C