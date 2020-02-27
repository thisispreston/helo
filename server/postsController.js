const bcrypt = require('bcryptjs');

module.exports = {
  getPosts: async (req, res) => {
    const { searchInput, userPosts } = req.query
    const { id } = req.params
    const db = req.app.get('db')

    let posts = await db.get_posts()

    if(userPosts == 'true' && searchInput) {
      let filteredPosts = posts.filter( e => e.author_id == id && e.title.toLowerCase().includes(searchInput.toLowerCase()))

      res.status(200).send(filteredPosts)
    } else if (userPosts == 'true' && !searchInput) {
      let filteredPosts = posts.filter( e => {
        return e.author_id == id
      })
      res.status(200).send(filteredPosts)
    } else if (userPosts == 'false' && searchInput) {
      let filteredPosts = posts.filter( e => e.title.toLowerCase().includes(searchInput.toLowerCase()))
      
      res.status(200).send(filteredPosts)
    } else if (userPosts === 'false' && !searchInput) {
      res.status(200).send(posts)
    } else {
      res.sendStatus(500)
    }
  },
  getOnePost: async (req, res) => {
    const { id } = req.params
    const db = req.app.get('db')

    let post = await db.get_one_post(id)

    if (post[0]) {
      res.status(200).send(post[0])
    } else {
      res.sendStatus(500)
    }
  },
}
