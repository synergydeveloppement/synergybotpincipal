const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
      let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!bUser) return message.channel.send("Merci de mentionner un utilisateur !");
      let bReason = args.join(" ").slice(22);
      if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return console.log("BAN")

   var banembed = new Discord.RichEmbed()
      .setDescription("Rapport de Bannisement")
      .setColor("#bc0000")
      .addField("User banni", `${bUser} with ID ${bUser.id}`)
      .addField("User banni par ", `<@${message.author.id}> ID ${message.author.id}`)
      .addField("Banni dans ", message.channel)
      .addField("A", message.createdAt)
      .addField("Raison", bReason)
      .setImage("../images/ban.gif");
  
      let incidentchannel = message.guild.channels.find(`name`, "logs");
      if(!incidentchannel) return message.channel.send("Erreur, le channel *logs* existe pas.");
  
      message.guild.member(bUser).ban(bReason);
      incidentchannel.send(banembed);
  message.delete()
  
      return;
    }
 module.exports.help = {
  name:"ban"
}