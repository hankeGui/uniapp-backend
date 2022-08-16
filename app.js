const express = require('express')

// 引入跨域插件
const cors = require('cors');

const app = express()
const port = 3000
// 解决跨域
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/hanke', (req, res) => {
    res.send('hanke')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})