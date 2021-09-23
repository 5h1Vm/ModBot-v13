const {
    SlashCommandBuilder
} = require("@discordjs/builders")
module.exports = (Client) => {
    const pingcommand = new SlashCommandBuilder()
        .setName(`ping`)
        .setDescription(`Shows me Ping`)
        .addStringOption(option => {
            option.setName("which_ping")
                .setDescription("What type of ping do you want me to get?")
                .setRequired(false)
                .addChoices([
                    ["API Ping", "apiping"],
                    ["Bot Ping", "botping"],
                ])
            return option;
        })
    Client.allslashcommands.push(pingcommand.toJSON());

    const helpcommand = new SlashCommandBuilder()
        .setName(`help`)
        .setDescription(`Helps you out with me`)
    Client.allslashcommands.push(helpcommand.toJSON());
    return true;
}