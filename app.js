// app.js
const express = require('express')
const app = express()
const port = 3000


app.use((req, res, next) => {

  const startTime = new Date()
  console.log(`Request Time : ${startTime.toLocaleString()} | ${req.method} from ${req.url}`)

  res.on('finish', () => {
    const endTime = new Date()
    const totalTime = endTime - startTime
    console.log(`Response Time : ${endTime.toLocaleString()} | ${req.method} from ${req.url} | total Time: ${totalTime}ms`)
  })


  next()
})


const user = 'AC genie'

const auth = (req, res, next) => {
  if (user === 'AC genie') {
    next()
  } else {
    res.send('授權失敗！')
  }
}



app.get('/', auth, (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})