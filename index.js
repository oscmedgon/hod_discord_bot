const Discord = require('discord.js')
const client = new Discord.Client()

require('dotenv').load()

const token = process.env.TOKEN

client.on('ready', () => {
  console.log('I am ready!')
  client.user.setStatus('!hod para ser saludado')
  client.user.setGame('!hod para ser saludado')
})
client.on('message', message => {
  console.log(message)
  const ignoreCaps = message.content.toLowerCase()
  if (ignoreCaps.search('!hod') !== -1) {
    message.react(':wink:')
    message.reply('es la caña.')
  }
})

client.login(token)
