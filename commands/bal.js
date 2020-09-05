const Discord = require('discord.js')
const { get } = require('../constructors/sqlite.js')
const config = require("../config.json")

module.exports = {
  name: "rubys",
  aliases: ["bal"],
  description: "displays the user's balance.",
  execute: async(client, message, args, data, db) => {
   
    let user = message.guild.members.get(member => args.length && message.mentions.users.size < 1 && member.user.username.toLowerCase().startsWith(args.join(" ").toLowerCase())) || client.users.get(args[0]) || message.mentions.users.first() || message.author
    
    //if we got an user by name, we must access to the user property 
    if (user.username === undefined) user = user.user
    
    data = await get(message, user)
    
    let logs = []
    
    data.logs.map((x, y) => {
      if (y < 10) logs.push(x)
    })
    
    let embed = new Discord.RichEmbed()
    .setColor(config.embedColor)
    .setTitle(`${user.username}'s Balance:`)
    .setDescription(`${user} you currently have <a:diamond_but_ruby:745915015789281311>  **__${data.coins.toFixed(2)}__**  <a:diamond_but_ruby:745915015789281311> Rubys.
    
    If you want to earn some Rubys to buy members use : \`*discover\` | \`*d\`.
    
    <a:diamond_but_ruby:745915015789281311> you can buy members For your server By : <a:diamond_but_ruby:745915015789281311>
    <a:diamond_but_ruby:745915015789281311> \`*ad [Rubys] [Description]\` | \`*buy [Rubys] [Description]\` <a:diamond_but_ruby:745915015789281311>`)
    .setThumbnail(user.displayAvatarURL)
    .addField(`**__Dont want rubys by Joining Server ?__** `, `<a:diamond_but_ruby:745915015789281311> **Join the support server and create a ticket To buy rubys!**
    Buy Lottery Ticket To test Your Luck : \`*ticket\`.`, false) 
    .addField(`**ღ▬▬▬▬▬ஜ۩Ƹ̵̡ Transactions Ʒ۩ஜ▬▬▬▬▬ღ**`, logs.length == 0 ? "No Transaction history found!" : logs.join("\n"))
    message.channel.send(embed) 
  } 
} 
