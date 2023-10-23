const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.end('Hello world!! (express)')
})

app.listen(port, () => {
  console.log(`服務已啟動在 ${port} 埠`)
})
