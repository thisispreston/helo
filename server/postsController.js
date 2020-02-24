const bcrypt = require('bcryptjs');

module.exports = {
  getPosts: async (req, res) => {
      const db = req.app.get('db')

      let posts = await db.get_posts()
      if(posts[0]) {
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
  