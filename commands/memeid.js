const randomPuppy = require('random-puppy');
const Discord = require('discord.js');

module.exports = {
    name: "memeid",
    description: "Gives you a meme",
    async run (client, message, args) { 
        const subReddits = ["meme indonesia", "fbi meme"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]
  
        const img = await randomPuppy(random);
  
        const memeEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`Your meme. From r/${random}`)
        .setURL(`https://reddit.com/r/${random}`)
  
        message.channel.send(memeEmbed);
    }
}