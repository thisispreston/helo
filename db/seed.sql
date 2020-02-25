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
    author_id INT REFERENCES users(user_id)
);

ALTER TABLE users
    ALTER password
    SET DATA TYPE TEXT
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

INSERT INTO post (
    title,
    img,
    content,
    author_id 
) VALUES (
    'Thai Food',
    'https://media-cdn.tripadvisor.com/media/photo-s/19/7c/28/f1/authentic-thai-food.jpg',
    'Thai is to DIE for, if you can handle the HIGH spice levels.',
    6
),
(
    'Pika What!?!',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRH1_UNL_V5_ROhGYLdIW7HbscQGZJc7BaRqgdz0L9EMe4zXwbe',
    'Pika pika! Pika, pika pika pi pika CHUUUUUUU!',
    7
),
(
    'Runaway Dog',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/single-minded-royalty-free-image-997141470-1558379890.jpg?crop=0.671xw:1.00xh;0.0847xw,0&resize=640:*',
    'Fluffy, my dearest, has gone missing of late. He has run from my love and attention. If seen, please @ me.',
    7
)
;