const axios = require('axios')

// /api/discord/sign
const link = async message => {
  message.react('👋')
  const params = `id=${message.author.id}&username=${message.author.username}`
  const user = {
    username: message.author.username,
    id: message.author.id
  }
  const {data} = await axios.post('http://localhost:8080/api/discord/sign?', user)
  message.reply(`http://localhost:8080/api/discord/${data.token}`)
}

module.exports = link
