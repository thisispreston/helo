const bcrypt = require('bcryptjs');

module.exports = {
    login: async (req, res, next) => {
        const { username, password } = req.body
        const { session } = req
        const db = req.app.get('db')

        let user = await db.check_user([username])
        user = user[0]
        if (!user) {
            return res.status(400).send('Username not found.')
        }

        const authenticated = bcrypt.compareSync(password, user.user_password)

        if (authenticated) {
            delete user.user_password
            session.user = user
            res.status(202).send(session.user)
        } else {
            res.status(401).send('Incorrect password.')
        }
    },
    register: async (req, res, next) => {
        const { username, password, imageURL } = req.body
        const { session } = req
        const db = req.app.get('db')

        let user = await db.check_user([username])
        user = user[0]
        if (user) {
            return res.status(400).send('Username already in use.')
        }

        const salt = bcrypt.genSaltSync(20)
        const hash = bcrypt.hashSync(password, salt)

        let newUser = await db.register({username, hash, imageURL})
        newUser = newUser[0]
        session.user = newUser
        res.status(201).send(session.user)
    },
    // logout: (req, res) => {
    //     req.session.destroy()
    //     res.sendStatus(200)
    // },
  }