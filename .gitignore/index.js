const Discord = require('discord.js')
const bot = new Discord.Client()
var fs = require('fs')
let prefix = ("!")
bot.on("ready",  () => {
    console.log(`Le bot est en ligne sur xxxx`)
    bot.user.setPresence({
      status: "",
        game: {
            name: 'contrôler le serveur',
            type: "playing",
        }
    });
})

bot.on("message", message => {
if(message.channel.type !== "text") { 
        if(message.author.id !== "559155914087596073") {
            if(message.author.id === "453892276629012481") {
   
           if (message.content.indexOf('!rep') === 0) {
                var stringA = message.content.split(" ");
                var cpt = 2;
                var messageee = "";
                var ident = "";
                stringA.forEach(element => {
    
                    if (stringA[cpt] === undefined) {
    
                    } else {
    
    
                ident = stringA[1];
    
                        messageee = messageee.concat(stringA[cpt] + " ");
                    }
                    cpt++;
                });
    
                bot.users.find('id','' + ident + '').send(messageee);
    
            }
    
            } else {
                bot.users.find("id", '453892276629012481').send("MP de "+ message.author + "("+message.author.username+") : " + message.content);
                message.reply("Hey "+message.author.username+" tu viens de m'envoier un dm ? Pas de souci mais sache que je ne pourrai pas te répondre :)");
            }
    
        }
      }
})

bot.on("guildCreate", async guild => {
  let guildCreateChannel = bot.channels.get(`575029668055482368`);
  
let joinEmbed = new Discord.RichEmbed()
      .setTitle('Le bot vient de rejoindre un serveur')
      .setThumbnail(guild.iconURL)
      .addField('Info du serveur ', `Nom: **${guild.name}** \nPropriétaire: **${guild.owner.user.username}** \nMembres, **${guild.memberCount}** \n:id: **${guild.id}**`)
      
    return guildCreateChannel.send(joinEmbed);

});

bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Aucun fichier(s) trouvé");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} chargé !`);
    bot.commands.set(props.help.ame, props);
  });

});

bot.on("message", message => {
if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args)
       
})

bot.login(process.env.TOKEN)
