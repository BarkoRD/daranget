const axios = require('axios')
const nmd = require('nayan-media-downloader')

const getVideoLink = async (url) => {
  if (url.includes('facebook.com') || url.includes('instagram.com')) {
    return await getFacebookVideoUrl(url)
  } else if (url.includes('youtube.com')) {
    return await getYoutubeVideoUrl(url.replace('www.youtube.com', 'youtu.be'))
  } else if (url.includes('youtu.be')) {
    return await getYoutubeVideoUrl(url)
  } else if (url.includes('twitter.com') || url.includes('x.com')) {
    return await getTwitterVideoUrl(url)
  } else if (url.includes('tiktok.com')) {
    return await getTikTokVideoUrl(url)
  } else {
    throw new Error('URL no soportada')
  }
}
const getYoutubeVideoUrl = async (url) => {
  try {
    const { ytdown } = nmd
    const response = await ytdown(url)
    const videoUrl = response.data.video
    return { url: videoUrl }
  } catch (error) {
    console.log('Error al obtener información del video de YouTube:', error)
  }
}

const getFacebookVideoUrl = async (url) => {
  try {
    const { ndown } = nmd
    const response = await ndown(url)
    const videoUrl = response.data[0].url
    return { url: videoUrl }
  } catch (error) {
    console.log('Error al obtener información del video de Facebook:', error)
  }
}

const getTikTokVideoUrl = async (url) => {
  try {
    const { tikdown } = nmd
    const response = await tikdown(url)
    const videoUrl = response.data.video
    return { url: videoUrl }
  } catch (error) {
    console.log('Error al obtener información del video de TikTok:', error)
  }
}

const getTwitterVideoUrl = async (url) => {
  try {
    const { twitterdown } = nmd
    const response = await twitterdown(url)
    const videoUrl = response.data.HD
    return { url: videoUrl }
  } catch (error) {
    console.log('Error al obtener información del video de Twitter:', error)
  }
}

async function downloadVideoAsBuffer(videoUrl) {
  try {
    const response = await axios({
      method: 'GET',
      url: videoUrl,
      responseType: 'stream',
      timeout: 30000,
    })

    const chunks = []
    for await (const chunk of response.data) {
      chunks.push(chunk)
    }

    const buffer = Buffer.concat(chunks)
    return buffer
  } catch (error) {
    throw error
  }
}

module.exports = {
  getVideoLink,
  getYoutubeVideoUrl,
  getFacebookVideoUrl,
  getTikTokVideoUrl,
  getTwitterVideoUrl,
  downloadVideoAsBuffer,
}
