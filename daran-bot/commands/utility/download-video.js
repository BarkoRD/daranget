const { SlashCommandBuilder } = require('discord.js')
const axios = require('axios')
const fs = require('fs')
const path = require('path')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('download-video')
    .setDescription(
      'Aplicaciones soportadas: YouTube, Facebook, Instagram, TikTok y Twitter-X'
    )
    .addStringOption((option) =>
      option
        .setName('url')
        .setDescription('Pega tu url aqui!')
        .setRequired(true)
    ),
  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true })
    const url = interaction.options.getString('url')
    const endpoint = 'http://localhost:3000/download'
    try {
      const { data, headers } = await axios.get(endpoint, {
        params: { url },
        responseType: 'arraybuffer',
        timeout: 30000,
      })
      const videoBuffer = Buffer.from(data, 'base64')
      const maxSize = 8 * 1024 * 1024
      if (videoBuffer.length > maxSize) {
        await interaction.editReply({
          content: `El video es demasiado grande para enviar directamente. Puedes descargarlo desde [aquí](${headers['link']}).`,
        })
      } else {
        const tempFilePath = path.join(__dirname, 'temp.mp4')
        fs.writeFileSync(tempFilePath, videoBuffer)
        await interaction.editReply({ files: [tempFilePath] })
        fs.unlinkSync(tempFilePath)
      }
    } catch (error) {
      await interaction.editReply({
        content: 'Ocurrió un error al descargar el video',
      })
    }
  },
}
