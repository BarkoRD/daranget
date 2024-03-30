const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { getVideoLink, downloadVideoAsBuffer } = require('./functions.js')

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.get('/getvideo', async (req, res) => {
  const videoUrl = req.query.url
  try {
    const { url } = await getVideoLink(videoUrl)
    const buffer = await downloadVideoAsBuffer(url)
    const video = { buffer: buffer.toString('base64'), url }
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Content-Disposition': 'attachment; filename="video.json"',
    })
    res.end(JSON.stringify(video))
  } catch (error) {
    console.log('Error reading the file:', error)
    res.sendStatus(500)
  }
})

app.listen(3000, () => {
  console.log(`Server running at http://localhost:${3000}`)
})
