import express from "express";
import cors from "cors";

import { getVideoLink } from "./functions.js";

const app = express();
app.use(express.json());
app.use(cors("http://localhost:5000"));

app.get("/", (req, res) => {
  res.json("guara u duin here brou ?");
});

app.post("/download", async (req, res) => {
  try {
    const videoLink = await getVideoLink(req.body.url);
    console.log(videoLink);
    res.json(videoLink);
  } catch (error) {
    res.json(error);
    console.log(error);
  }
});


app.listen(3000, () => {
  console.log("Click Here brou http://localhost:3000");
});
