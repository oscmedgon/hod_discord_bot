// /api/discord/sign
const link = message => {
  message.react('👋')
  console.log(message.author)
}

module.exports = link
