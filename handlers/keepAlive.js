
const timer = (client) => {
  setInterval(() => {
    client.channels.get('409660944751525888').sendMessage(`Sigo vivo`)
  }, 1740000)
}
// 1740000 29 minutes
const keepAlive = client => {
  client.channels.get('409660944751525888').sendMessage(`He arrancado, espero no quedarme dormido`)
  timer(client)
}
module.exports = keepAlive
