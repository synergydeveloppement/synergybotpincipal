const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Merci de mentionner une personne a report");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("RANDOM")
    .addField("User reporté ", `${rUser} with ID: ${rUser.id}`)
    .addField("Reporté par", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Heure", message.createdAt)
    .addField("Raison", rreason);

    let reportschannel = message.guild.channels.find(`name`, "logs");
    if(!reportschannel) return message.channel.send("Impossible de trouver le channel *logs*")
    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);
}
 
module.exports.help = {
  name: "report"
}