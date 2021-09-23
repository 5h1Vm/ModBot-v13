function escapeRegex(str){
    return str.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
}
function generateHelpEmbed(guild){
return new Discord.MessageEmbed()
.setColor("DARK_AQUA")
.setTitle(`Help`)
.setDescription(`Hemlo! meself ${Client.user.username} and me dad is 5h1Vm. \n\n You Chose Help I see \n\n Here you go...`)
.setThumbnail(Client.user.displayAvatarURL())
.addFields([{
        name: "Ping",
        value: "Shows me Ping",
        inline: false
    },
    {
        name: "Help",
        value: "Helps you with Commands",
        inline: false
    },
    {
        name: "Deploy",
        value: "Adds Slash Commands to this Server",
        inline: false
    }
])
.setFooter(guild.name, guild.iconURL({
    dynamic: true
}))
}

module.exports.escapeRegex = escapeRegex;
module.exports.generateHelpEmbed = generateHelpEmbed ;