
// Loading enviroment
require('dotenv').load()

// Loading Discord client
const Discord = require('discord.js')
const client = new Discord.Client()

// Loading bot instances
const hod = require('./handlers/hod')
const link = require('./handlers/link')
const help = require('./handlers/help')
const keepAlive = require('./handlers/keepAlive')

// loading bot TOKEN
const token = process.env.TOKEN

// Bot initialization
client.on('ready', () => {
  console.log('I am ready!')
  client.user.setStatus('!help')
  client.user.setGame('!help')
  keepAlive(client)
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
