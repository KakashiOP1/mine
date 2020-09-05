const Discord = require('discord.js')
const config = require('../config.json')
module.exports = {
  execute: async(client, db) => {
   
    console.log(`${client.user.tag} is Ready`)
 
    client.user.setActivity(`*help | ${client.guilds.size} Servers | ${client.users.size} Users | Powerful default 🔥`, { type: "WATCHING" }) 
    
  } 
}