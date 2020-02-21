create table users (
    user_id serial primary key,
    username varchar(20),
    password varchar(20),
    profile_pic TEXT
);

create table if not exists post (
    post_id serial primary key,
    title VARCHAR(45),
    img TEXT,
    content TEXT,
    author_id INT REFERENCES users(user_id),
    text varchar(250)
);

ALTER TABLE users
ALTER COLUMN password TEXT
;

INSERT INTO users (
  username,
  password,
  profile_pic
) VALUES (
  'katnissEverdeen',
  'nightlock',
  'https://cdn.shopify.com/s/files/1/1673/0883/products/The_Hunger_Games_Katniss_Everdeen_Cosplay_Wig_3_1800x.jpg?v=1571611441'
)
;

INSERT INTO users (
  username,
  password,
  profile_pic
) VALUES (
  'peetaMellark',
  'katniss',
  'https://inthesetimes.com/images/articles/Peeta_Mellark.jpg'
)
;