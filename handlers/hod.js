const salute = message => {
  message.channel.sendMessage(fraseRandom())
}
const fraseRandom = () => frasesChulas[Math.floor(Math.random() * frasesChulas.length)] + ' :sweat_smile:'

const hod = message => {
  console.log(message.channel)
  salute(message)
}

module.exports = hod

const frasesChulas = [
  'Yo..... soy..... tu Padri',
  'Pero esto quien lo paga',
  'Que no me robes mis frases',
  'Hooola maldiiiito!!!',
  'Matar',
  'EEEEEL PULPOOO!!!!',
  'AAAASIENDA DEL PATRÓOOON!!!!',
  'Feliz navidad!!!',
  'A farmear plásticos',
  'Que podría salir mal',
  'Que se nos hace muy de noche',
  'Como si se hubiera tenido un reventao ahí',
  'Me han diagnosticado una mierda muy chunga :sob:',
  'Barco a la vista, baby!! :sunglasses:' 
]
