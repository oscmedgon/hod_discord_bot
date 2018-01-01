const salute = message => {
  message.reply(fraseRandom())
}
const fraseRandom = () => frasesChulas[Math.floor(Math.random() * frasesChulas.length)]

const hod = message => {
  message.react('👋')
  salute(message)
}

module.exports = hod

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
