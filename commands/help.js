const Discord = require('discord.js')
const config = require('../config.json')
module.exports = {
  name: "help",
  aliases: ["help"],
  description: "displays the bot commands list.",
  execute: async (client, message, args, data, db) => {
    let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || ".";
    let text = []

    let owners = ["710417938796249109"]

    client.commands.map(x => {
      if (!x.description.includes("owner") || owners.includes(message.author.id)) text.push(`**__${prefix}${x.name} - [${x.aliases ? x.aliases : "none"}]__**:\n${x.description}`)
    })

    let embed = new Discord.RichEmbed()
      .setColor(config.embedColor)
      .setTitle(`${client.user.username} Commands List`)
      .setDescription(`**ღ▬▬▬▬▬▬ஜ۩Ƹ̵̡Ӝ̵̨̄Ʒ۩ஜ▬▬▬▬▬▬ღ 

*rubys : To See Your Wallet.
Command: *rubys / *bal

*discover : To Find Some Communitys, Join Them To Get Currency.
Command: *discover / *d

*pay : To Pay Currency To Another User.
Command: *pay {User} {Ruby Amount}

*buy : To Buy Ads For Your Server.
Command: *buy {Ruby Amount} {Description}

*check : To See If You Can Leave A Server.
Command: *check / *time

*daily : To Get Your Daily Reward.
Command: *daily

*info : To see how many people have joined using The bot
Command : *info / *order

*ticket : To Buy A Lottery ticket & Test Out Your Luck.
Command: *ticket

*transactions : To see your transaction history
Command : *transactions / *th

*help : To Get The Command List.
Command: *help

*link : To Add The Bot To Your Favourite Server.
Command: *link / *invite

*report : To Report Any Bug To Our Development Team.
Command: *report

ღ▬▬▬▬▬▬ஜ۩Ƹ̵̡Ӝ̵̨̄Ʒ۩ஜ▬▬▬▬▬▬ღ 

(Main Server)[https://discord.gg/WqZWaVP] | (Invite me)[https://discordapp.com/oauth2/authorize?client_id=740241899633508352&scope=bot&permissions=8] |  ** `)
      .setFooter(`${config.botName} 2020`)
      .setImage(`https://cdn.discordapp.com/attachments/739682108880191520/745687327413895258/ruyby-1.png`)
    message.channel.send(embed).catch(e => message.channel.send(`Uh, an error :s`))
  }
} 
