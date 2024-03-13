const { SlashCommandBuilder } = require('discord.js')
const axios = require('axios')

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
    const url = interaction.options.getString('url')
    const endpoint = `https://api.daranhub.com/download`
    const { data } = await axios.post(endpoint, { url })
    if (data.url) {
      await interaction.reply({ content: data.url, ephemeral: true })
    } else {
      await interaction.reply({
        content: 'No se pudo descargar el video',
        ephemeral: true,
      })
    }
  },
}
