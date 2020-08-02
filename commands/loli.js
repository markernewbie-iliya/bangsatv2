const randomPuppy = require('random-puppy');
const Discord = require('discord.js');

module.exports = {
    name: "loli",
    description: "Gives you a loli",
    async run (client, message, args) { 
        const subReddits = ["loli anime", "wallpaper loli", "loli fbi"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]
  
        const img = await randomPuppy(random);
  
        const memeEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`From r/${random}`)
        .setURL(`https://reddit.com/r/${random}`)
  
        message.channel.send(memeEmbed);
    }
}