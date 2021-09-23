module.exports = Client => {

    const {
        escapeRegex,
        generateHelpEmbed
    } = require("../Utlis/function.js");
    const config = require("../config.json");
    const Discord = require("discord.js");

    Client.on("messageCreate", async (message) => {
        if (!message.guild || message.author.bot) return;
        let {
            prefix
        } = config;
        const prefixRegex = new RegExp(`^(<@!?${Client.user.id}>|${escapeRegex(prefix)})\\s*`)
        if (!prefixRegex.test(message.content)) return;
        const [, matchedPrefix] = message.content.match(prefixRegex);
        // if (!message.content.startsWith(prefix)) return;
        let args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
        let cmd = args.shift()?.toLowerCase();
        if (cmd.length == 0) {
            if (matchedPrefix.includes(Client.user.id)) {
                return message.reply({
                    embeds: [
                        new Discord.MessageEmbed()
                        .setColor("DARK_AQUA")
                        .setTitle(`:white_check_mark: My Prefix is **\`${prefix}\`**`)
                        .catch(console.error)
                    ]
                })
            }
        }
        if (cmd) {
            switch (cmd) {
                case "ping": {
                    message.reply("Pinging the API...").then((msg) => {
                        msg.edit({
                                content: `> **API PING** \`${Client.ws.ping}\`
                            
                            > **BOT PING** \`${Date.now() - msg.createdTimestamp}\``
                            })
                            .catch(console.error);
                    })
                }
                break;

            case "deploy": {
                message.guild.commands.set(Client.allslashcommands);
                message.reply(`> :white_check_mark: Deployed ${Client.allslashcommands.length} Commands to ${message.guild.name}`).catch(console.error)
            }
            break;

            case "help": {
                const embed = generateHelpEmbed(message.guild)
                message.reply({
                    embeds: [embed]
                }).catch(console.error);

            }
            break;

            default: {
                message.reply(`:no_entry: **Unkown Command**`).catch(console.error);
            }
            break;
            }
        }
    })

    Client.on("interactionCreate", async (interaction) => {
        if (!interaction.isCommand()) return;
        const {
            member,
            channelId,
            guildId,
            applicationId,
            commandName,
            deffered,
            replied,
            ephemeral,
            options,
            id,
            createdTimestamp
        } = interaction;
        const {
            guild
        } = member;
        let channel = guild.channels.cache.get(channelId);
        switch (commandName) {
            case "ping": {
                let choice = interaction.options.getString("which_ping");
                if (!choice) {
                    interaction.reply({
                        content: "Pinging the API...",
                        ephemeral: true
                    }).then((inter) => {
                        interaction.editReply({
                                content: `> **API PING** \`${Client.ws.ping}\` \n> **BOT PING** \`${Date.now() - createdTimestamp}\``,
                                ephemeral: true
                            })
                            .catch(console.error);
                    })
                } else if (choice === "apiping") {
                    interaction.reply({
                        content: `> **API PING** \`${Client.ws.ping}\``,
                        ephemeral: true
                    }).catch(console.error);
                } else if (choice === "botping") {
                    interaction.reply({
                        content: "Pinging the API...",
                        ephemeral: true
                    }).then((inter) => {
                        interaction.editReply({
                                content: `> **BOT PING** \`${Date.now() - createdTimestamp}\``,
                                ephemeral: true
                            })
                            .catch(console.error);
                    })
                }
            }
            break;

        case "help": {
            const embed = generateHelpEmbed(guild);
            interaction.reply({
                embeds: [embed],
                ephemeral: true
            }).catch(console.error);

        }
        break;

        }
    })
}