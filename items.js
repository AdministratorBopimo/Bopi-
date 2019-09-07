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

if (message.content.startsWith(`${userprefix}` + "item")) {     
    var parameters = message.content.split(" ");
    var id = parameters[1];

    //main
    const request = require('request');
    request.get(`https://www.brickplanet.com/web-api/store/get-item/${id}`, (err, res, details) => {
    let id = JSON.parse(details)
    var name = id.Name
    //on-sale
    if (id.IsOnSale == "1"){
        var onsale = "Yes"
    }
    else {
        onsale = "No"
    }
        if (id.Image == null) {
            let sEmbed = new Discord.RichEmbed()
            .setColor(colours.gold)
            .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
            .setTitle("Item not found " + "<:notadmin:619916084279115787>")     
            .setTimestamp()
            .setFooter("Made by Administrator")
            message.channel.send({embed: sEmbed});
        }
        else {
            let sEmbed = new Discord.RichEmbed()
            .setColor(colours.gold)
            .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
            .setTitle(id.Name)
            .addField("ID", id.ID, true)
            .setURL("https://www.brickplanet.com/store/")
            .setThumbnail("https://cdn.brickplanet.com/" + id.Image)
            //options
            .addField("On-Sale", onsale,true)
            .addField("Price Bits", id.PriceBits, true)
            .addField("Price Credits", id.PriceCredits, true)
            .addField("Description", id.Description, true)
            //bottm part
            .setTimestamp()
            .setFooter("Made by Administrator")
            message.channel.send({embed: sEmbed});
        }

        })
    }
});
