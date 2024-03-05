import express from "express"

const app = express()

app.get('/', (req, res) => {
  res.json('funcionando bro')
})

app.listen(3000, () => {
  console.log('Click Here brou http://localhost:3000')
})
