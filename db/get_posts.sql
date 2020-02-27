SELECT username, profile_pic, post_id, title, img, content, author_id, user_id
FROM post p
JOIN users u
ON u.user_id = p.author_id
ORDER BY post_id DESC
;