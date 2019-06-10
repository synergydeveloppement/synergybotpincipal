const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission de faire cette commande");

 
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Veuillez mentionner une personne.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Merci de mettre un rôle valide");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Rôle innexistant");

  if(rMember.roles.has(gRole.id)) return message.reply("La personne à déjà ce rôle.");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Bien joué !Tu viens de recevoir le rôle : ${gRole.name}`)
  }catch(e){
    console.log(e.stack);
    message.channel.send(`Bravo <@${rMember.id}>, tu as ${gRole.name}.`)
  }
}

module.exports.help = {
  name: "addrole"
}
