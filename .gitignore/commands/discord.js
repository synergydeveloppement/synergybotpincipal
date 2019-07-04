const Discord = require("discord.js");

module.exports.run = (bot, message) => {
       message.channel.send("https://discord.gg/zswmkcf")
       message.delete(1)
} 
module.exports.help = {
  name: "discord"
}
