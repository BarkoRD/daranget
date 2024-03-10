import express from "express"
import cors from "cors"
import axios from "axios"
import ytdl from "ytdl-core"
import nmd from "nayan-media-downloader"


const app = express()
app.use(express.json())
app.use(cors("http://localhost:5000"))

app.post("/download/yt", async (req, res) => {
  try {
    const { url } = req.body
    const info = await ytdl.getInfo(url)
    const formats = ytdl.filterFormats(info.formats, "audioandvideo")
    const video = formats[0]
    res.json({ url: video.url })
  } catch (error) {
    console.error("Error al obtener información del video:", error)
    res
      .status(500)
      .json({ error: "Ocurrió un error al procesar la solicitud." })
  }
})

app.post("/download/fc", async (req, res) => {
  const { ndown } = nmd
  const videoUrl = req.body.url
  const response = await ndown(videoUrl)
  const url = response.data[0].url
  res.json({ url })
})

// app.post("/download/ig", async (req, res) => {
//   const { ndown } = nmd
//   const videoUrl = req.body.url
//   const response = await ndown(videoUrl)
//   const url = response.data[0].url
//   res.json({ url })
// })

app.post("/download/tt", async (req, res) => {
  const { tikdown } = nmd
  const videoUrl = req.body.url
  const response = await tikdown(videoUrl)
  const url = response.data.video
  res.json({ url })
})
app.post("/download/x", async (req, res) => {
  const { twitterdown  } = nmd
  const videoUrl = req.body.url
  const response = await twitterdown(videoUrl)
  const url = response.data.HD
  res.json({ url })
})

app.listen(3000, () => {
  console.log("Click Here brou http://localhost:3000")
})
