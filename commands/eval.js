const Discord = require('discord.js')

module.exports = {
  name: "eval",
  description: "owner only",
  execute: async (client, message, args, data, db) => {

    if (message.author.id !== "710417938796249109" && message.author.id !== "710417938796249109" &&
      message.author.id !==
      "710417938796249109" && message.author.id !== "302457454846017546") return

    let ev = args.join(" ")

    try {
      message.channel.send(await eval(ev))
    } catch (e) {
      return message.channel.send(e.message)
    }
  }
} 