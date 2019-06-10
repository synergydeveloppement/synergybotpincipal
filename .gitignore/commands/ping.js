const Discord = require("discord.js");

module.exports.run = (bot, message) => {
   
  const pingembed = new Discord.RichEmbed()
       .setColor("RANDOM")
       .setDescription(`\n\nLattence en *ms* : ${Date.now() - message.createdTimestamp}ms`)
       .setTimestamp()
       message.channel.send(pingembed)
} 
module.exports.help = {
  name: "ping"
}