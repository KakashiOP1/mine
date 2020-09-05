const Discord = require('discord.js')
const { get } = require('../constructors/sqlite.js')

module.exports = {
  name: "pay",
  aliases: ["pay"],
  description: "used to pay rubys to the mentioned user.",
  execute: async(client, message, args, data, db) => {
   
    let amount = args.filter(x => !x.startsWith("<@"))[0] 
    
    if (message.mentions.users.size < 1 || isNaN(amount) || amount < 1) return message.channel.send(`Invalid usage, you have to mention an user and put a valid amount of rubys.`)
    
    let user = message.mentions.users.first() 
    
    if (data.coins < Number(amount)) return message.channel.send(`You dont have **__${amount}__** Rubys.`)
    
    if (Number(amount) < 8) return message.channel.send(`Minimum payment is 8 Rubys.`)
    
    if (user.id === message.author.id) return message.channel.send(`You can't pay yourself.`)
    
    if (user.bot) return message.channel.send(`:x: **You can't pay To bots**`)
    
    message.channel.send(`paid ${user} **__${amount}__** Rubys! [-${amount}]`)
    
    data.logs.unshift(`[-${amount}] - You've paid ${user.tag}.`)
    
    db.set(`logs_${message.author.id}`, data.logs)
    
    db.subtract(`coins_${message.author.id}`, Number(amount))
    
    data = await get(message, user)
  
    data.logs.unshift(`[+${amount}] - ${message.author.tag} paid you.`)
    
    db.set(`logs_${user.id}`, data.logs)
    
    db.add(`coins_${user.id}`, Number(amount)) 
  } 
} 
