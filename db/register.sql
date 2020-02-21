INSERT INTO users (
  username,
  password,
  profile_pic
) VALUES (
  ${username},
  ${hash},
  ${imageURL}
)
RETURNING user_id, username, profile_pic
;