const Discord = require('discord.js')
const ms = require('parse-ms')
const config = require('../config.json')
module.exports = {
  name: "stats",
  aliases: ["stats"],
  description: "shows the stats of Advice Bot.",
  execute: async(client, message, args, data, db) => {
   
    let ownersID = config.ownersID;
    
    let owners = []
    
    ownersID.map(x => owners.push(client.users.get(x).tag))
   
   // let usersCount = await client.shard.fetchClientValues("users.size")
    
  //  let serverCount = await client.shard.fetchClientValues('guilds.size') 
    
    let uptime = [] 
    
    Object.entries(ms(client.uptime)).map((x, y) => {
      if (x[1] > 0 && y < 4) uptime.push(`**${x[1]} ${x[0]}**`) 
    })
    
    let embed = new Discord.RichEmbed()
    .setColor(config.embedColor)
    .setTitle(`${client.user.username} Info/Stats`)
    .setThumbnail(client.user.displayAvatarURL)
    .addField(`<:tickYes:744551309906280540> Bot Owners <:tickYes:744551309906280540>`, owners.join("\n"), false) 
    .addField(`<:tickYes:744551309906280540> Library <:tickYes:744551309906280540>`, `Discord.js - v12.2.0`, false)
    .addField(`<:tickYes:744551309906280540> Memory Usage:`, (process.memoryUsage().rss / 1024 / 1024).toFixed(2) + "MB", false) 
    .addField(`<:tickYes:744551309906280540> Servers Count <:tickYes:744551309906280540>`, client.guilds.size.toLocaleString(), false)
    .addField(`<:tickYes:744551309906280540> Users Count <:tickYes:744551309906280540>`, client.users.size.toLocaleString(), false) 
    .addField(`<:tickYes:744551309906280540> Shards Count:`, `Uninplemented`, false)
    .addField(`<:tickYes:744551309906280540> Uptime <:tickYes:744551309906280540>`, uptime.join(", "), false) 
    message.channel.send(embed) 
  } 
} 
