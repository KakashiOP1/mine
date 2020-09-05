const Discord = require('discord.js')
const config = require('../config.json')
module.exports = {
  name: "discover",
  description: "displays 3 servers to join in and gain rubys.",
  aliases: ["d"],
  execute: async (client, message, args, data, db) => {

    let orders = await db.startsWith(`orders_`, { sort: ".data" })
    console.log(orders)
    let length = 1

    orders = orders.filter(x => x.data > 0 && client.guilds.get(x.ID.split("_")[1]) && client.guilds.get(x.ID.split("_")[1]).members.get(message.author.id) === undefined)
    console.log(orders)
    let embed = new Discord.RichEmbed()
      .setColor(config.embedColor)
      .setTitle(`__Servers to join and Earn Rubys__`)
      .setDescription(`**ღ▬▬▬▬▬▬ஜ۩Ƹ̵̡Ӝ̵̨̄Ʒ۩ஜ▬▬▬▬▬▬ღ
      
      [note: you'll get 1 ruby per server joined, if you leave before 3 days have passed you will lose 2 rubys.]**`)
    for (let i = 0; i < orders.length; i++) {

      let handler = true

      if (length > 3) { } else {

        let id = orders[i].ID.split("_")[1]

        let guild = client.guilds.get(orders[i].ID.split("_")[1]).name

        let code = await db.fetch(`code_${id}`)


        await client.fetchInvite("https://discord.gg/" + code)
          .then(link => {
            // console.log(link.code)
            if (link.code === null) handler = false
          })
          .catch(error => {
            handler = false
          })

        await new Promise(resolve => setTimeout(resolve, 1))

        if (handler) {
          let description = await db.fetch(`description_${id}`)

          embed.addField(`<a:RainbowArrowRight:750638066439421963> **__${guild}__** <a:RainbowArrowLeft:750638109607329833>`, description, false)
          length++
        }
      }
    }

    embed.addField(`Servers you may like:
    **__(Ruby+ support server)[https://discord.gg/WqZWaVP]__**
    **__(Venus | MC - Free nitro)[https://discord.gg/JFB6Wwg]__**`, false)

    embed.addField(`There is no servers to join ?`, `There probably isn't any guild available for you to join, Try again after 5 minutes`, false)

    message.channel.send(embed)
  }
} 
