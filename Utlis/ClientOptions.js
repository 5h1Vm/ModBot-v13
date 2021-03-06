const Discord = require("discord.js");
module.exports.ClientOptions = {
    restTimeOffset: 0,
    allowedMentions: {
        parse: [ /*"roles", "users", "everyone"*/ ], //Bot Allowed to Tag
        repliedUser: true, //Tag Reply
    },
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        // Discord.Intents.FLAGS.GUILD_MEMBERS,
        // Discord.Intents.FLAGS.GUILD_BANS,
        // Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        // Discord.Intents.FLAGS.GUILD_INTEGRATIONS,
        // Discord.Intents.FLAGS.GUILD_INVITES,
        // Discord.Intents.FLAGS.GUILD_WEBHOOKS,
        // Discord.Intents.FLAGS.GUILD_VOICE_STATES,
        // Discord.Intents.FLAGS.GUILD_PRESENCES,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        // Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        // Discord.Intents.FLAGS.GUILD_MESSAGE_TYPING,
        // Discord.Intents.FLAGS.DIRECT_MESSAGES,
        // Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        // Discord.Intents.FLAGS.DIRECT_MESSAGE_TYPING
    ],
    presence: {
        activities: [{
            name: "You",
            type: "WATCHING",
            URL: "https://twitch.tv/5h1Vm"
        }],
        status: "dnd"
    }
}