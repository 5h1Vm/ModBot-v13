const Discord = require("discord.js");
const config = require("./config.json");
const fs = require('fs');
const {ClientOptions} = require("./Utlis/ClientOptions.js");
const Client = new Discord.Client(ClientOptions);
Client.allslashcommands = [];
require("./Utlis/SlashCommandBuilder.js")(Client);

fs.readdirSync("./modules/").forEach((dir) => {
    if (fs.existsSync(`./modules/${dir}`) && fs.lstatSync(`./modules/${dir}`).isDirectory()) {
        for (let file of fs.readdirSync(`./modules/${dir}/`).filter(file => file.endsWith(".js"))) {
            try {
                require(`./modules/${dir}/${file}`)(Client);
                console.log(` [X] :: LOADED: ./modules/${dir}/${file}`)
            } catch (e){console.log(e)}
        }
    } else {
        try {
            require(`./modules/${dir}`)(Client);
            console.log(` [X] :: LOADED: ./modules/${dir}`)
        } catch (e){console.log(e)}}})

Client.login(config.TOKEN)