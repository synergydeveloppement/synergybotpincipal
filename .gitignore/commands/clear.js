const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Tu n'as pas le droit d'utliser cette commande ")      
     if(!args[0]) return message.channel.send("Tu dois préciser un nombre de message à supprimer !")
     if (args[0] > 100) return message.channel.send("Vous devez fournir un nombre inférieur à 100 !");
        message.channel.bulkDelete(args[0]).then(() => {
           message.channel.send(`${args[0]} messages on été supprimer `)
         .then(m => m.delete(5000));
         }
        )
    }
    module.exports.help = {
  name:"clear"
}