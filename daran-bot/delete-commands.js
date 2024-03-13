const { REST, Routes } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();
const clientID = process.env.clientID
const token = process.env.token
const guildID = process.env.guildID

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientID, guildID), { body: [] })
	.then(() => console.log('Successfully deleted all guild commands.'))
	.catch(console.error);

rest.put(Routes.applicationCommands(clientID), { body: [] })
	.then(() => console.log('Successfully deleted all application commands.'))
	.catch(console.error);
