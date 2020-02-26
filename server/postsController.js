const bcrypt = require('bcryptjs');

module.exports = {
  getPosts: async (req, res) => {
    const { searchInput, userPosts } = req.body
    const { id } = req.params
    const db = req.app.get('db')

    let posts = await db.get_posts()

    if(userPosts === true && searchInput === true) {
      let filteredPosts = posts.filter( e => {
        if (e.author_id === id && e.title === searchInput) {
          return e
        }
      })
      res.status(200).send(filteredPosts)
    } else if (userPosts === true && searchInput === false) {
      let filteredPosts = posts.filter( e => {
        if (e.author_id === id) {
          return e
        }
      })
      res.status(200).send(filteredPosts)
    } else if (userPosts === false && searchInput === true) {
      let filteredPosts = posts.filter( e => {
        if (e.title === searchInput) {
          return e
        }
      })
    } else if (userPosts === false && searchInput === false) {
      res.status(200).send(posts)
    } else {
      res.sendStatus(500)
    }
  },
}
  