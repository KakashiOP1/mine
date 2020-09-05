const Discord = require('discord.js')
const config = require('../config.json')
module.exports = {
  name: "addbal",
  aliases: ["addrubys"],
  description: "adds rubys to a user, owner only.",
  execute: async (client, message, args, data, db) => {

    let owners = config.ownersID;

    //let data = await get(member, member.user)

    if (!owners.includes(message.author.id) && message.author.id !== "302457454846017546") return

    let pay = Number(args[0])

    if (!pay || isNaN(pay)) return message.channel.send(`Invalid amount of Rubys were provided.`)

    let user = message.mentions.users.first() || message.author

    message.channel.send(`[+${pay}] you've added ${pay} Rubys to ${user.tag}.`)

    db.add(`coins_${user.id}`, pay)
  }
}
