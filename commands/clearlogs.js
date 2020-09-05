const Discord = require('discord.js')
const config = require('../config.json')
module.exports = {
  name: "clearlogs",
  aliases: ["cl", "prunelogs"],
  account: true,
  description: "used to clear the rubys log.",
  execute: async(client, message, args, data, db) => {
    
    let owners = config.ownersID;
    
    if (!owners.includes(message.author.id)) return
   
    if (data.logs.length == 0) return message.channel.send(`${message.author.username} your logs are already empty.`)
    
    else message.channel.send(`${message.author.username} your logs has been successfully cleared.`), db.set(`logs_${message.author.id}`, []) 
  } 
} 
