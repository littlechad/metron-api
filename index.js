
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

const me = {
  user: {
    id: 1,
    fullname: 'metron',
    email: 'metron@metron',
    profilePic: 'https://avatars0.githubusercontent.com/u/3166340?s=460&v=4',
  },
  provider: [{
    name: 'google',
  }, {
    name: 'facebook',
  }],
  auth: {
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1Njc1ODkzMTIsImV4cCI6MTU5OTEyNTMxMiwiYXVkIjoibWV0cm9uIiwic3ViIjoibWV0cm9uQG1ldHJvbiIsIkdpdmVuTmFtZSI6Im1vYml1cyIsIlN1cm5hbWUiOiJjaGFpciIsIkVtYWlsIjoibWV0cm9uQG1ldHJvbiIsIlJvbGUiOiJXYXRjaGVyIn0.nIvDe_NIK4xe1s6ZzLOhnh0aubHCVuRyT8nRigin0s0',
    refreshToken: '5d215cc9116c3b0010300473.a694c94838597ee5db9c8314a17b54e0e9420dbefb161e319311f3ae0bdf47d3a886f0e892af5e2f',
    owner: 1,
  },
}
const signout = { title: 'You are signed out!' }
const welcome = { title: 'Welcome to metron api!' }

app.use(bodyParser.json())

app.use(cors())

app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.send({ ...welcome, ...me })
})

app.get('/auth/me', (req, res) => {
  console.log('/auth/me: ', me)
  return res.send(me)
})

app.post('/auth/signin', (req, res) => {
  console.log('/auth/signin: ', me)
  return res.send(me)
})

app.post('/auth/signout', (req, res) => {
  console.log('/auth/signout: ', signout)
  return res.send(signout)
})

app.listen(process.env.NODE_PORT, () => {
  console.log(`listening on port ${process.env.NODE_PORT}`)
})
