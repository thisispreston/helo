const bcrypt = require('bcryptjs');

module.exports = {
  register: async (req, res, next) => {
      const { username, password } = req.body
      const { session } = req
      const db = req.app.get('db')
      let imageURL = `https://robohash.org/${username}.png`

      let user = await db.check_user([username])
      user = user[0]
      if (user) {
          return res.status(400).send('Username already in use.')
      }

      const salt = bcrypt.genSaltSync(10)
      const hash = bcrypt.hashSync(password, salt)

      let newUser = await db.register({username, hash, imageURL})
      newUser = newUser[0]
      session.user = newUser
      res.status(201).send(session.user)
  },
  login: async (req, res, next) => {
    const { username, password } = req.body
    const { session } = req
    const db = req.app.get('db')

    let user = await db.check_user([username])
    user = user[0]
    if (!user) {
      return res.status(400).send('Username not found.')
    }

    const authenticated = bcrypt.compareSync(password, user.password)

    if (authenticated) {
      delete user.password
      session.user = user
      res.status(202).send(session.user)
    } else {
      res.status(401).send('Incorrect password.')
    }
    },
    // getUser: async (req, res, next) => {
    //   const { id } = req.params
    //   const db = req.app.get('db')
  
    //   let user = await db.get_user([id])
    //   let posts = await db.get_posts()

    //   if(user[0] && posts[0]) {
    //     let info = {...user[0], ...posts[0]}
    //     res.status(200).send(info)
    //   } else {
    //     res.sendStatus(500)
    //   }
    // },
    // logout: (req, res) => {
    //     req.session.destroy()
    //     res.sendStatus(200)
    // },
  }
  