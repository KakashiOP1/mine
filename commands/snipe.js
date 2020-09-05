const { RichEmbed } = require("discord.js");
var snipes = require("../snipe.json"); // file containing  snipes
module.exports = {
  name: "snipe",
  description: "Get a snipe of your choice in the channel!",
  usage: "[snipe number]",
  category: "fun",
  execute: async (bot, message, args) => {
  let chn = message.channel.id;
  var snipechannel = snipes[chn];
  if (snipechannel[0] === "No snipes") {
    message.channel.send("What? There are no deleted messages atm");
  } else {
    const embed = {
      "color": 5608903,
      "footer": {
        "text": `Sniped by: ${message.author.tag}`
      },
      "fields": [{
        "name": `${snipechannel[1]} said...`,
        "value": `${snipechannel[0]}`,
      }]
    };
    await message.channel.send({
      embed
    });
    snipechannel[0] = "No snipes";

    var fileName = './snipe.json';
    var file = require(fileName);

    fs.writeFile(fileName, JSON.stringify(file, null, 2), function(error) {
      if (error) {
        return console.log('oops');
      }
    });
  }
  },
};
