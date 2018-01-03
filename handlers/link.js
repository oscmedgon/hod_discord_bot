const axios = require('axios')

// /api/discord/sign
const link = message => {
  message.react('👋')
  const params = `id=${message.author.id}&username=${message.author.username}`
  const user = {
    username: message.author.username,
    id: message.author.id
  }
  axios.post('http://localhost:8080/api/discord/sign?', user)
  .then(response => {
    message.reply(`http://localhost:8080/api/discord/${response.data.token}`)
  })
}

module.exports = link
