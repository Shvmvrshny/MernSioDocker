const express = require('express')
const dotenv = require('dotenv')
const { chats } = require('./data/data')
const app = express()
dotenv.config()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('API is running')
})

app.get('/api/chat', (req, res) => {
  res.send(chats)
})

app.get('/api/chat/:id', (req, res) => {
  const onechat = chats.find((c) => c._id === req.params.id)
  res.send(onechat)
})

app.listen(port, () => {
  console.log(`port is running : ${port}`)
})
