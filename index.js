const botconfig = require("./botconfig.json")
const Discord = require('discord.js');
const colours = require("./colours")
const bot = new Discord.Client();
const prefix = botconfig.prefix;

bot.on("message", (message) => {
        if(message.content == "status")
                message.channel.sendMessage('Bot is working fine');
    // Rainbow Shades
    if(message.content == ${prefix}rs) {
            let sEmbed = new Discord.RichEmbed()
            .setColor(colours.gold)
            .setAuthor('BP+', 'https://media.discordapp.net/attachments/539933821714563072/592767534655209475/icon.png', "https://www.discord.gg/ut2nhhr%22)
            .setTitle("Rainbow Shades")
            .setDescription("Kinda Try to be a rainbow in someone's cloud")
            .setURL("https://www.brickplanet.com/store/294848/rainbow-shades%22)
            .setThumbnail("https://cdn.brickplanet.com/e9a318a2-f87d-482d-9355-09530b8ec1d3.png%22)
            .addField("Value", "130k", true)
            .addField("Copies", "57", true)
            .addField("Demand", "High", true)
            //bottm part
            .setTimestamp()
            .setFooter("Made by BP+")
            message.channel.send({embed: sEmbed}); //sending the embed
    } 
});

bot.login(process.env.token);
