SELECT username, profile_pic, title, img, content, author_id, user_id
FROM post p
JOIN users u
ON u.user_id = p.author_id
WHERE post_id = $1
;