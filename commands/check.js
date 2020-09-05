const Discord = require('discord.js')
const ms = require('parse-ms')
const config = require("../config.json")

module.exports = {
  name: "check",
  aliases: ["time"],
  description: "shows you the time left to be able to leave safety.",
  execute: async(client, message, args, data, db) => {
   
    let timeout = 259200000
    
    let time = []
    
    if (data.joinedDate !== null && timeout - (Date.now() - data.joinedDate) > 999) {
      Object.entries(ms(timeout - (Date.now() - data.joinedDate))).map((x, y) => {
        if (x[1] > 0 && y < 4) time.push(`**${x[1]} ${x[0]}**`)      })
      

      let embed = new Discord.RichEmbed()
      .setColor(config.embedColor)
      .setTitle(`don't leave!`)
      .setDescription(`<a:tickNo:744551351282958396> You will lose 2 Rubys if you leave now <a:tickNo:744551351282958396>`)
      .addField(`⏰Time left:`, time.join(", "), false)
      message.channel.send(embed)    } else {
      let embed = new Discord.RichEmbed()
      .setColor(config.embedColor)
      .setTitle(`you can leave!`)
      .setDescription(`<:tickYes:744551309906280540> You can leave this server Safely! <:tickYes:744551309906280540>`)
      message.channel.send(embed) 
    } 
  } 
} 
