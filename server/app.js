process.env.YTDL_NO_UPDATE = '1';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { getVideoLink, downloadVideoAsBuffer } = require('./functions.js')

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.get("/", (req, res) => {
  res.json("guara u duin here brou ?");
});

app.post("/download", async (req, res) => {
  try {
    const videoLink = await getVideoLink(req.body.url);
    res.json(videoLink);
  } catch (error) {
    res.json(error);
    console.error(error);
  }
});

app.get('/download', async (req, res) => {
  const videoUrl = req.query.url
  try {
    const  { url }  = await getVideoLink(videoUrl)
    const buffer = await downloadVideoAsBuffer(url)
    const video = { buffer: buffer.toString('base64'), url }
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Content-Disposition': 'attachment; filename="video.json"',
    })
    res.end(JSON.stringify(video))
  } catch (error) {
    res.status(400).json({ error: `Error en la solicitud: ${error}` })
  }
})

app.listen(3000, () => {
  console.log(`Server running at http://localhost:${3000}`)
})
