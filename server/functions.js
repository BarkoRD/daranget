const axios = require('axios')
const ytdl = require('ytdl-core')
const nmd = require('nayan-media-downloader')

const getVideoLink = async (url) => {
  if (url.includes('facebook.com') || url.includes('instagram.com')) {
    return await getFacebookVideoUrl(url)
  } else if (url.includes('youtube.com') || url.includes('youtu.be')) {
    return await getYoutubeVideoUrl(url)
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

////YOUTUBE NAYAN////YOUTUBE NAYAN////YOUTUBE NAYAN////YOUTUBE NAYAN////YOUTUBE NAYAN////YOUTUBE NAYAN////YOUTUBE NAYAN////

// const getYoutubeVideoUrl = async (url) => {
//   try {
//     const { ytdown } = nmd
//     const response = await ytdown(url)
//     const videoUrl = response.data.video
//     return { url: videoUrl }
//   } catch (error) {
//     console.log('Error al obtener información del video de YouTube:', error)
//   }
// }

// const getVideoLink = async (url) => {
//   if (url.includes('facebook.com') || url.includes('instagram.com')) {
//     return await getFacebookVideoUrl(url)
//   } else if (url.includes('youtube.com')) {
//     return await getYoutubeVideoUrl(url.replace('www.youtube.com', 'youtu.be'))
//   } else if (url.includes('youtu.be')) {
//     return await getYoutubeVideoUrl(url)
//   } else if (url.includes('twitter.com') || url.includes('x.com')) {
//     return await getTwitterVideoUrl(url)
//   } else if (url.includes('tiktok.com')) {
//     return await getTikTokVideoUrl(url)
//   } else {
//     throw new Error('URL no soportada')
//   }
// }

////YOUTUBE NAYAN////YOUTUBE NAYAN////YOUTUBE NAYAN////YOUTUBE NAYAN////YOUTUBE NAYAN////YOUTUBE NAYAN////YOUTUBE NAYAN////

////YTDLCORE////YTDLCORE////YTDLCORE////YTDLCORE////YTDLCORE////YTDLCORE////YTDLCORE////

const getYoutubeVideoUrl = async (url) => {
  try {
    const info = await ytdl.getInfo(url)
    console.log(info)
    let videoname = info.videoDetails.title
    const formats = ytdl.filterFormats(info.formats, 'audioandvideo')
    const video = formats[0]

    return { url: video.url, videoname: videoname }
  } catch (error) {
    console.error('Error al obtener información del video:', error)
    throw new Error('Ocurrió un error al procesar la solicitud de YouTube.')
  }
}

////YTDLCORE////YTDLCORE////YTDLCORE////YTDLCORE////YTDLCORE////YTDLCORE////YTDLCORE////

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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const getVideoLinkmp3 = async (url) => {
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    return await getYoutubeVideoUrlmp3(url)
  } else if (!url.includes('youtube.com') || !url.includes('youtu.be')) {
    return { noyt: 'actualmente solo pueden descargar mp3 de youtube' }
  } else {
    throw new Error('URL no soportada')
  }
}

const getYoutubeVideoUrlmp3 = async (url) => {
  try {
    const info = await ytdl.getInfo(url)
    let videoname = info.videoDetails.title
    const formats = ytdl.filterFormats(info.formats, 'audioonly')
    const video = formats[1]
    return { url: video.url, videoname: videoname }
  } catch (error) {
    console.error('Error al obtener información del video:', error)
    throw new Error('Ocurrió un error al procesar la solicitud de YouTube.')
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

async function downloadAudioAsBuffer(audioUrl) {
  try {
    const response = await axios({
      method: 'GET',
      url: audioUrl,
      responseType: 'arraybuffer', // Obtenemos el audio como buffer binario
      timeout: 30000, // Establece un tiempo límite para la solicitud
    })

    // `response.data` ya es un ArrayBuffer debido al responseType 'arraybuffer'
    const buffer = Buffer.from(response.data)
    return buffer
  } catch (error) {
    throw error
  }
}

module.exports = {
  downloadAudioAsBuffer,
  getVideoLink,
  getVideoLinkmp3,
  getYoutubeVideoUrl,
  getFacebookVideoUrl,
  getTikTokVideoUrl,
  getTwitterVideoUrl,
  downloadVideoAsBuffer,
}
