SELECT username, profile_pic FROM users
WHERE user_id IN (
  SELECT author_id
  FROM post
  WHERE author_id = $1
)
RETURNING user_id, username, profile_pic
;