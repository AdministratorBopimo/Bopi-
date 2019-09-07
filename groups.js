const botconfig = require("./botconfig.json")
var items = require("./items.json")
const Discord = require('discord.js');
const colours = require("./colours")
var fs = require('fs');

const bot = new Discord.Client();
const prefix = botconfig.prefix;
const userprefix = botconfig.userprefix;
//main
bot.on("message", (message) => {

if (message.content.startsWith(`${userprefix}` + "group")) {     
    var parameters = message.content.split(" ");
    var groupName = parameters[1];

    //fetch
    const request = require('request');
    request.get(`https://brickplanet.com/web-api/groups/get-group/${groupName}`, (err, res, groupN) => {
    let group = JSON.parse(groupN)
    let name = group.Name
    //verified
    if (group.IsVerified == 1){
        var verified = "<:verified:619911977728213052>"
    }
    else {
        verified = "<:notadmin:619916084279115787>"
    }
    //main
    if (group.msg == "Missing parameter(s)"){
        let sEmbed = new Discord.RichEmbed()
        .setColor(colours.gold)
        .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
        .setTitle("User not found " + "<:notadmin:619916084279115787>")     
        .setTimestamp()
        .setFooter("Made by Administrator")
        message.channel.send({embed: sEmbed});
    }
    else{
        let sEmbed = new Discord.RichEmbed()
        .setColor(colours.gold)
        .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
        .setTitle(group.Name)
        .addField("ID", group.ID)
        .setURL("https://www.brickplanet.com/communities/" + `${groupName}`)
        .setThumbnail("https://cdn.brickplanet.com/" + group.Image)
        //options
        .addField("Member Count", group.MemberCount, true)
        .addField("Verified",verified)
        //bottm part
        .setTimestamp()
        .setFooter("Made by Administrator")
        message.channel.send({embed: sEmbed});
    }
    });
}
});
