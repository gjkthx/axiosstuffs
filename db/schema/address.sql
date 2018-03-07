create table if not exists address (
    id serial,
    who int REFERENCES users(id),
    address varchar (250)
)
-- 68C