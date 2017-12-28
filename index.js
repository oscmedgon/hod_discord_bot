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
  if (message.content === '!hod') {
    message.reply('es la caña.')
  }
})

client.login(token)
