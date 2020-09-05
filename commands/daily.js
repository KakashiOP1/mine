const Discord = require('discord.js')
const { get } = require('../constructors/sqlite.js')
let cooldown = new Map();

module.exports = {
  name: "daily",
  aliases: ["daily"],
  description: "get daily 2 rubys.",
  execute: async(client, message, args, data, db) => {

    let time = Date.now(); 
    if(cooldown.get(message.author.id) > time)
    { 
      message.channel.send(`**${message.author.tag}**, you've already claimed your daily reward!`); 
      return;
    }

    
    
    db.add(`coins_${message.author.id}`, 2) 
    
    cooldown.set(message.author.id, time + 86400000);

    data.logs.unshift(`[+2] - Got Daily Bonus !`)

    message.channel.send(`**${message.author.tag}**, you have successfully redeemed your daily reward and got <a:diamond_but_ruby:745915015789281311> 2 <a:diamond_but_ruby:745915015789281311> Rubys!`)
  } 
} 
