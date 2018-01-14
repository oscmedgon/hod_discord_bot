const help = message => {
  message.react('👋')
  message.author.sendMessage(`Hola ${message.author.username} que pasa por tu casa, te dejo una lista de cosas que puedo hacer por ti.`)
  message.author.sendMessage('Si cualquier mensage contiene la palabra "hod" mandaré un mensaje super chulo para que lo vean todos')
  message.author.sendMessage('Si quieres vincular tu cuenta de discord a la cuenta de harbingers of devastation escribe "!link", tranqui, que no podremos hacer nada en tu nombre ni almacenamos información confidencial ni a tus contraseñas.')
  message.author.sendMessage('A continuación te dejo una de mis genialidades:')
  message.author.sendMessage('-----------------------------------------------')
}

module.exports = help
