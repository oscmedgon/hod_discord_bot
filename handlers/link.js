const axios = require('axios')

// /api/discord/sign
const link = async message => {
  message.react('👋')
  const params = `id=${message.author.id}&username=${message.author.username}`
  const user = {
    username: message.author.username,
    id: message.author.id
  }
  try {
    const {data} = await axios.post('https://www.harbingersofdevastation.com/api/discord/sign?', user)
    message.author.sendMessage(`https://www.harbingersofdevastation.com/api/discord/${data.token}`)
  } catch (error) {
    message.author.sendMessage(`Ha ocurrido un error.`)
    message.author.sendMessage(error.response.data.msg)
  }
}

module.exports = link
