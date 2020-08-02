const Discord = require('discord.js');
const NanaAPI = require("nana-api");

module.exports = {
    name: "nana",
    description: "Gives you a meme",
    async run (client, message, args) { 
        const nana = new NanaAPI();
 
// Get gallery from book ID or book link
nana.g("14045").then((g) => {
  console.log(g);
});
nana.g("https://nhentai.net/g/4501").then((g) => {
  console.log(g);
});
  
        message.channel.send(nanaEmbed);
    }
}