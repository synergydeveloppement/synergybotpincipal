const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
const bb = args.join(" ")
   if(!bb[0]) return message.channel.send("Erreur.")
message.delete()
    var lembed = new Discord.RichEmbed()
    .setTitle("Nouvel élement sur la liste des tâches")
    .addField("Element :", `${bb}`);


  let taches = message.guild.channels.find(`name`, "liste-des-tâches");
      if(!taches) return message.channel.send("Erreur, le channel *liste-des-tâches* existe pas !");
 taches.send(lembed);
  return

}
    module.exports.help = {
        name:"liste"
      }