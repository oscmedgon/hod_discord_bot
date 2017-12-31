const frasesChulas = [
  'Yo..... soy..... tu Padri',
  'Pero esto quien lo paga',
  'Que no me robes mis frases',
  'Hooola maldiiiito!!!',
  'GÑAAAAA!!!!(Periko saludando)',
  'Matar',
  'EEEEEL PULPOOO!!!!',
  'AAAASIENDA DEL PATRÓOOON!!!!',
  'Feliz navidad!!!',
  'A farmear plásticos'
]

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
  // Don't forget to log the message!
  const ignoreCaps = message.content.toLowerCase()
  if (ignoreCaps.search('hod') !== -1) {
    message.react('👋')
    salute(message)
  }
})

const salute = message => {
  message.reply(fraseRandom())
}

const fraseRandom = () => frasesChulas[Math.floor(Math.random() * frasesChulas.length)]
// client.on('message', message => {
//   const ignoreCaps = message.content.toLowerCase()
//   if (ignoreCaps.search('!hod') !== -1) {
//     message.react('👋')
//     message.reply('es la caña.')
//   }
// })

client.login(token)
