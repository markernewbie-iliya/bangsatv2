const ms = require('ms');

module.exports = {
    name: "giveaway",
    description: "Starts a giveaway",

    async run(client, message, args) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Mastah tidak diizinkan memulai hadiah');

        let channel = message.mentions.channels.first();

        if (!channel) return message.channel.send('Silahkan Mastah pilih channel yang mau diadakan giveaway');

        let giveawayDuration = args[1];

        if (!giveawayDuration || isNaN(ms(giveawayDuration))) return message.channel.send('Maaf Mastah Harap berikan durasi yang valid');

        let giveawayWinners = args[2];

        if (isNaN(giveawayWinners) || (parseInt(giveawayWinners) <= 0)) return message.channel.send('Mastah kalau mau buat giveaway pastikan untuk memberikan pemenang minimal 1 orang!');

        let giveawayPrize = args.slice(3).join(" ");

        if (!giveawayPrize) return message.channel.send('Mastah, !\'Mastah niat ngadain giveaway apa kagak sih Hmp');

        client.giveawaysManager.start(channel, {
            time: ms(giveawayDuration),
            prize: giveawayPrize,
            winnerCount: giveawayWinners,
            hostedBy: client.config.hostedBy ? message.author : null,

            messages: {
                giveaway: (client.config.everyoneMention ? "@everyone\n\n" : "") + "✨**GIVEAWAY**✨",
                giveawayEned: (client.config.everyoneMention ? "@everyone\n\n" : "") + "**GIVEAWAY ENDED**",
                timeRemaining: "Waktu yang tersisa: **{duration}**",
                inviteToParticipate: "React with 🎉 to enter",
                winMessage: "🎊Congrats {winners}, you won **{prize}**🎊",
                embedFooter: "Giveaway time!",
                noWinner: "Couldn't determine a winner🎭",
                hostedBy: "Hosted by {user}",
                winners: "winner(s)",
                endedAt: "Ends at",
                units: {
                    seconds: "seconds",
                    minutes: "minutes",
                    hours: "hours",
                    days: "days",
                    pluralS: false
                }
            }
        })

        message.channel.send(`Giveaway starting in ${channel}`);
    }
}