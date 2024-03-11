const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { getVideoLink } = require("./functions.js");

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(cors("http://localhost:5000"));
// app.use(cors({
//   origin: "http://localhost:5174"
// }))
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

app.listen(3000, () => {
  console.log("Click Here brou http://localhost:3000");
});
