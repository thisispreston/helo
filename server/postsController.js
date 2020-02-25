const bcrypt = require('bcryptjs');

module.exports = {
  getPosts: async (req, res) => {
    const { searchInput, userPosts } = req.body
    const db = req.app.get('db')

    let posts = await db.get_posts()
    // let {username, profile_pic, post_id, title, img, content, author_id, user_id} = posts
    if(userPosts === true && searchInput === true) {
      //send back posts that match the if
      res.status(200).send(posts)
    } else if (userPosts === true && searchInput === false) {
      let posts = posts.filter( e => {
        return e.author_id = e.user_id
      })
      res.status(200).send(posts)
    } else if (userPosts === false && searchInput === false) {
      res.status(200).send(posts)
    } else if (userPosts === false && searchInput === false) {
      //send back posts that match the if
      res.status(200).send(posts)
    } else {
      res.sendStatus(500)
    }
  },
  userPosts: async(req, res) => {
    const { id } = req.params
    const db = req.app.get('db')

    let userPosts = await db.user_posts([id])
    if(userPosts[0]) {
      res.status(200).send(userPosts)
    } else {
      res.sendStatus(500)
    }
  },
}
  