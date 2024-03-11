const ytdl = require("ytdl-core");
const nmd = require("nayan-media-downloader");

const getVideoLink = async (url) => {
  if (url.includes("facebook.com") || url.includes("instagram.com")) {
    return await getFacebookVideoUrl(url);
  } else if (url.includes("youtube.com") || url.includes("youtu.be")) {
    console.log(await getYoutubeVideoUrl(url));
    return await getYoutubeVideoUrl(url);
  } else if (url.includes("twitter.com") || url.includes("x.com")) {
    return await getTwitterVideoUrl(url);
  } else if (url.includes("tiktok.com")) {
    return await getTikTokVideoUrl(url);
  } else {
    throw new Error("URL no soportada");
  }
};

const getYoutubeVideoUrl = async (url) => {
  try {
    const info = await ytdl.getInfo(url);
    const formats = ytdl.filterFormats(info.formats, "audioandvideo");
    const video = formats[0];
    return { url: video.url };
  } catch (error) {
    console.error("Error al obtener información del video:", error);
    throw new Error("Ocurrió un error al procesar la solicitud de YouTube.");
  }
};

const getFacebookVideoUrl = async (url) => {
  try {
    const { ndown } = nmd;
    const response = await ndown(url);
    const videoUrl = response.data[0].url;
    return { url: videoUrl };
  } catch (error) {
    console.error("Error al obtener información del video de Facebook:", error);
    throw new Error("Ocurrió un error al procesar la solicitud de Facebook.");
  }
};

const getTikTokVideoUrl = async (url) => {
  try {
    const { tikdown } = nmd;
    const response = await tikdown(url);
    const videoUrl = response.data.video;
    return { url: videoUrl };
  } catch (error) {
    console.error("Error al obtener información del video de TikTok:", error);
    throw new Error("Ocurrió un error al procesar la solicitud de TikTok.");
  }
};

const getTwitterVideoUrl = async (url) => {
  try {
    const { twitterdown } = nmd;
    const response = await twitterdown(url);
    const videoUrl = response.data.HD;
    return { url: videoUrl };
  } catch (error) {
    console.error("Error al obtener información del video de Twitter:", error);
    throw new Error("Ocurrió un error al procesar la solicitud de Twitter.");
  }
};

module.exports = {
  getVideoLink,
  getYoutubeVideoUrl,
  getFacebookVideoUrl,
  getTikTokVideoUrl,
  getTwitterVideoUrl,
};
