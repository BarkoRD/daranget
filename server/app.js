// process.env.YTDL_NO_UPDATE = '1'
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const {
  getVideoLink,
  getVideoLinkmp3,
  downloadVideoAsBuffer,
  downloadAudioAsBuffer,
} = require('./functions.js')

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const corsOptions = {
  exposedHeaders: '*',
  origin: '*',
}

app.use(cors(corsOptions))

app.get('/', (req, res) => {
  res.json('darangetapi 1.9 is running guara u duin here brou ?')
})

app.post('/download', async (req, res) => {
  try {
    const videoLink = await getVideoLink(req.body.url)
    res.json(videoLink)
  } catch (error) {
    res.json(error)
    console.error(error)
  }
})

//mp4
app.get('/download', async (req, res) => {
  const videoUrl = req.query.url
  try {
    const { url, videoname } = await getVideoLink(videoUrl)
    const buffer = await downloadVideoAsBuffer(url)

    let filename = encodeURIComponent(videoname)

    res.status(200)
    res.setHeader('Content-Type', 'video/mp4')
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`)
    res.setHeader('X-Filename', filename)
    res.setHeader('link', url)
    res.end(buffer)
  } catch (error) {
    res.status(400).json({ error: `Error en la solicitud: ${error}` })
  }
})

//version completamente funcional con ffmepg online no funciona
// app.get('/downloadmp3', async (req, res) => {
//   const videoUrl = req.query.url
//   try {
//     const { url, videoname } = await getVideoLink(videoUrl)
//     const buffer = await downloadVideoAsBuffer(url)

//     const tmpVideoPath = tmp.tmpNameSync({ postfix: '.mp4' })
//     fs.writeFileSync(tmpVideoPath, buffer)

//     const tmpAudioPath = tmp.tmpNameSync({ postfix: '.mp3' })

//     exec(
//       `"${ffmpegStatic}" -i "${tmpVideoPath}" -q:a 0 -map a "${tmpAudioPath}"`,
//       (error) => {
//         if (error) {
//           console.error(`exec error: ${error}`)
//           return res.status(500).send('Error al procesar el video')
//         }

//         const audioBuffer = fs.readFileSync(tmpAudioPath)
//         let filename = encodeURIComponent(videoname)

//         res.status(200)
//         res.setHeader('Content-Type', 'audio/mp3')
//         res.setHeader(
//           'Content-Disposition',
//           `attachment; filename="${filename}"`
//         )
//         res.setHeader('X-Filename', filename)
//         res.end(audioBuffer)

//         fs.unlinkSync(tmpVideoPath)
//         fs.unlinkSync(tmpAudioPath)
//       }
//     )
//   } catch (e) {
//     console.log(e)
//     res.status(400).json({ error: `Error en la solicitud: ${e}` })
//   }
// })

//version funcional casi pero dura mucho y online no funciona
// app.get('/downloadmp3', async (req, res) => {
//   const videoUrl = req.query.url
//   try {
//     const { url, videoname, noyt } = await getVideoLinkmp3(videoUrl)
//     if (!noyt) {
//       const buffer = await downloadAudioAsBuffer(url)

//       let filename = encodeURIComponent(videoname)
//       console.log(buffer)
//       res.status(200)
//       res.setHeader('link', url)
//       res.setHeader('Content-Type', 'audio/mp4')
//       res.setHeader('Content-Disposition', `attachment; filename="${filename}"`)
//       res.setHeader('X-Filename', filename)
//       res.end(buffer)
//     } else {
//       res.status(200)
//       res.setHeader('X-Filename', 'cancel')
//       res.json(noyt)
//     }
//   } catch (e) {
//     console.log(e)
//     res.status(400).json({ error: `Error en la solicitud: ${e}` })
//   }
// })

//version funcional que te envia a el videoplayback
app.get('/downloadmp3', async (req, res) => {
  const videoUrl = req.query.url
  try {
    const { url, videoname, noyt } = await getVideoLinkmp3(videoUrl)

    let filename = noyt ? 'cancel' : encodeURIComponent(videoname)
    console.log(filename)
    res.status(200).json({
      url,
      filename,
    })
  } catch (e) {
    console.error(e)
    res.status(400).json({ error: `Error en la solicitud: ${e}` })
  }
})

app.listen(3000, () => {
  console.log(`Server running at http://localhost:${3000}`)
})
