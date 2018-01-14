const hod = require('./handlers/hod')
const link = require('./handlers/link')
const help = require('./handlers/help')

const Discord = require('discord.js')
const client = new Discord.Client()

require('dotenv').load()

const token = process.env.TOKEN

client.on('ready', () => {
  console.log('I am ready!')
  client.user.setStatus('!help')
  client.user.setGame('!help')
})
client.on('message', message => {
  // Don't forget to log the message!
  const ignoreCaps = message.content.toLowerCase()
  if (ignoreCaps.search('hod') !== -1) {
    console.log(hod)
    hod(message)
  }
  if (ignoreCaps === '!link') {
    link(message)
  }
  if (ignoreCaps === '!help') {
    help(message)
  }
})

client.login(token)
