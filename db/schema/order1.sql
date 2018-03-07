create table if not exists order1 (
    id serial,
    who int REFERENCES users(id),
    what text,
    whenO int,
    other DECIMAL,
    other2 FLOAT(2)
);
-- 69D 69E 69F 69G
ALTER TABLE order1 rename column other2 to other3
-- 107E