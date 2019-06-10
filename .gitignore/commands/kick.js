
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
      let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!kUser) return message.channel.send("Merci de mentionner un utilisateur.")
      let kReason = args.join(" ").slice(22);
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return console.log("KICK")
  
      let kickEmbed = new Discord.RichEmbed()
      .setDescription("Rapport de Kick")
      .setColor("RANDOM")
      .addField("User kick", `${kUser} with ID ${kUser.id}`)
      .addField("KIck par", `<@${message.author.id}> with ID ${message.author.id}`)
      .addField("Dans", message.channel)
      .addField("A", message.createdAt)
      .addField("Raison", kReason);
  
      let kickChannel = message.guild.channels.find(`name`, "logs");
      if(!kickChannel) return message.channel.send("Erreur, le channel *logs* existe pas.");
  
      message.guild.member(kUser).kick(kReason);
      kickChannel.send(kickEmbed);
  
      return;
    }
 module.exports.help = {
  name:"kick"
}