const Discord = require("discord.js");

module.exports.run = (bot, message) => {
const fr = {
        "brazil": ":flag_br: Brézil",
        "eu-central": "Europe Centrale",
        "singapore": "Singapour ",
        "us-central": "Centre États-Unis ",
        "us-east": "Est États-Unis ",
        "us-south": "Sud États-Unis ",
        "us-west": "Ouest États-Unis ",
        "eu-west": "Europe Occidentale "
    };

const serveurinfo_embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField("Nom du serveur :", message.guild.name, true)
    .addField("ID du serveur", message.guild.id, true)
    .addField("Le serveur appartient à : ", message.guild.owner, true)
    .addBlankField(false) 
    .addField("Région du serveur : ", fr[message.guild.region], true)
    .addField(`Emojis`, `Emojis : ${message.guild.emojis.size}`, true)
    .addField("Rôles : ", `Rôles : ${message.guild.roles.size}`)
    .addBlankField(false)
    .addField(`Membres : (${message.guild.memberCount}) :`, `Humains : ${message.guild.members.filter(member => !member.user.bot).size} \nBots : ${message.guild.members.filter(member => member.user.bot).size} \nMembres en ligne : ${message.guild.members.filter(o => o.presence.status === "online").size} \nMembres inactif : ${message.guild.members.filter(i => i.presence.status === "idle").size} \nMembres à ne pas déranger : ${message.guild.members.filter(i => i.presence.status === "dnd").size} \n Membres déconnectés / invisibles : ${message.guild.members.filter(i => i.presence.status === "offline").size} \nMembres en streaming : ${message.guild.members.filter(i => i.presence.status === "streaming").size}`, true)
    .addField(`Salons et Catégories (${message.guild.channels.size}) :`, `Salons Textuels : ${message.guild.channels.filter(chan => chan.type === 'text').size} \nSalons Vocaux : ${message.guild.channels.filter(chan => chan.type === 'voice').size} \nCatégories : ${message.guild.channels.filter(chan => chan.type === 'category').size}`, true)
     message.channel.send(serveurinfo_embed)
}
module.exports.help = {
  name:"serveurinfo"
}