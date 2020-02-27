require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const ctrl = require('./controller')
const postsCtrl = require('./postsController')

// const ctrl = require('./controller')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

const app = express()

app.use(express.json())
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    rejectUnauthorized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    secret: SESSION_SECRET,
  })
)

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  }
}).then(db => {
  const port = SERVER_PORT
  app.set('db', db)
  app.listen(port || 4070, () => console.log(`Server is up and running on port: ${port}`))
  console.log('Database connected.')
})

// //#auth endpoints
// //TODO login, register, logout, get user
app.post('/api/register', ctrl.register)
app.post('/api/login', ctrl.login)
// app.get('/api/user/:id', ctrl.getUser)
// app.post('/api/logout', authCtrl.logout)

app.get('/api/posts/:id', postsCtrl.getPosts)
app.get('/api/post/:id', postsCtrl.getOnePost)

//user_id
// app.post('/api/posts/:id', ctrl.addPost)
// //?post id
// app.put('/api/posts/:id', ctrl.editPost)
// //?post id
// app.delete('/api/posts/:id', ctrl.deletePost)
