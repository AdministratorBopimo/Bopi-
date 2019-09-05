
const botconfig = require("./botconfig.json")
var items = require("./items.json")
const Discord = require('discord.js');
const colours = require("./colours")
var fs = require('fs');
//prefix
const bot = new Discord.Client();
const prefix = botconfig.prefix;

var prefixes = ['lumine', 'rs', "cruento", "arc", "ovrl", "lum antlers", "cru antlers","arc antlers","grf", "pge", "vr", "wge", "maple", "maple hood", "cory", "book", "ovrl staff", "vantas", "ws", "malum", 
        "explorer", "cave", "godlike", "binary", "solar", "blox crate", "med crate", "rc", "wcf", "ushanka"];
        //item ids
var ids = [295173, 294848, 295160, 295162, 287854, 295437, 295531, 295530, 295161, 294108, 298828, 288034, 300331, 300330, 296728, 300333, 297577, 287940, 292934, 300997, 
        288960, 290604, 290025, 295195, 301362, 293638, 290617, 296673, 289294, 287989];
        //item values
var valueId =  [200534, 295079]
var db = ["lumine", "rs", "cru", "arc", "ovrl", "lumantlers", "cruantlers", "arcantlers","grf", "pge", "vr", "wge", "maple", "mh", "cory", "book", "ovrlstaff", "vbs", "spec", "malum",
        "eh", "cave", "god", "binary", "solar", "bloxcrate", "mcrate", "rc", "wcf", "ushanka"];   
bot.on("message", (message) => {
    //do
for (var i=0; i<prefixes.length; i++) {
    if(message.content == `${prefix}` + prefixes[i]) {
        delete require.cache[require.resolve('./items.json')];        
        items = require("./items.json");
        let id = ids[i];
        let itemValue = valueId[i];
        // embed
        let value = items[db[i]].value
        let url = items[db[i]].url
        let thumbnail = items[db[i]].thumbnail
        let demand = items[db[i]].demand
        let status = items[db[i]].status
        //fetch
        const request = require('request');
        request.get(`https://www.brickplanet.com/web-api/store/get-item/${id}`, (err, res, details) => {
        let item = JSON.parse(details)
        //value
        request.get(`https://www.brickplanet.com/web-api/store/get-item/${itemValue}`, (err, res, itemV) => {
        let val = JSON.parse(itemV)
        // sending embed
        let sEmbed = new Discord.RichEmbed()
        .setColor(colours.gold)
        .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
        .setTitle(item.Name)
        .setURL(url)
        .setThumbnail(thumbnail)
        .addField("Value", value , true)
        .addField("Copies", item.NumOwners, true)
        .addField("Demand", demand, true)
        .addField("Status", status, true)
        .addField("Estimated Bits", `<:bits:618482702215151677>${item.EstimatedValueBits}`, true)
        .addField("Estimated Credits", `<:credits:618482404058988575>${item.EstimatedValueCredits}`, true)
        //bottm part
        .setTimestamp()
        .setFooter("Made by Administrator")
        message.channel.send({embed: sEmbed}); //sending the embed 
        });
        });
    }
}


        if (message.content.startsWith(`${prefix}` + 'change-value')) {
                if (message.author.id == '254707063114956800' || message.author.id == '142405198554333184' || message.author.id == '273996182819176449' || message.author.id == '370493879457153026' || message.author.id == '128203770902478848' || message.author.id == '414252900672471040' || message.author.id == '317022793839411212') {
                        var parameters = message.content.split(" ");
                        var itemName = parameters[1];
                        var value = parameters[2]; 
                                if (db.includes(itemName)) {
                                var data = JSON.parse(JSON.stringify(items));
                                data[itemName].value = value;

                                fs.writeFile("./items.json", JSON.stringify(data), function (err) {
                                if (err) return console.log(err);
                                });

                                let sEmbed = new Discord.RichEmbed()
                                .setColor(colours.gold)
                                .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
                               
                                .addField('Success',itemName.charAt(0).toUpperCase() + itemName.substr(1).toLowerCase() + " has been set to - " + value + " value")
                                //bottm part
                                .setTimestamp()
                                .setFooter("Made by Administrator")
                                message.channel.send({embed: sEmbed}); //sending the embed 
                        }
                }
        }
        //demand
        if (message.content.startsWith(`${prefix}` + 'change-demand')) {
                if (message.author.id == '254707063114956800' || message.author.id == '142405198554333184' || message.author.id == '273996182819176449' || message.author.id == '370493879457153026' || message.author.id == '128203770902478848' || message.author.id == '414252900672471040' || message.author.id == '317022793839411212') {
                        var parameters = message.content.split(" ");
                        var itemName = parameters[1];
                        var demand = parameters[2]; 
                        if (db.includes(itemName)) {

                                var data = JSON.parse(JSON.stringify(items));
                                data[itemName].demand = demand;

                                fs.writeFile("./items.json", JSON.stringify(data), function (err) {
                                if (err) return console.log(err);
                                });

                                let sEmbed = new Discord.RichEmbed()
                                .setColor(colours.gold)
                                .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
                               
                                .addField('Success',itemName.charAt(0).toUpperCase() + itemName.substr(1).toLowerCase() + " has been set to - " + demand + " demand")
                                //bottm part
                                .setTimestamp()
                                .setFooter("Made by Administrator")
                                message.channel.send({embed: sEmbed}); //sending the embed 
                        }
                }
        }
        //status
        if (message.content.startsWith(`${prefix}` + 'change-status')) {
                if (message.author.id == '254707063114956800' || message.author.id == '142405198554333184' || message.author.id == '273996182819176449' || message.author.id == '370493879457153026' || message.author.id == '414252900672471040' || message.author.id == '317022793839411212') {
                        var parameters = message.content.split(" ");
                        var itemName = parameters[1];
                        var status = parameters[2]; 
                        if (db.includes(itemName)) {

                                var data = JSON.parse(JSON.stringify(items));
                                data[itemName].status = status;

                                fs.writeFile("./items.json", JSON.stringify(data), function (err) {
                                if (err) return console.log(err);
                                });

                                let sEmbed = new Discord.RichEmbed()
                                .setColor(colours.gold)
                                .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
                               
                                .addField('Success',itemName.charAt(0).toUpperCase() + itemName.substr(1).toLowerCase() + " has been set to - " + status + " sta")
                                //bottm part
                                .setTimestamp()
                                .setFooter("Made by Administrator")
                                message.channel.send({embed: sEmbed}); //sending the embed 
                        }
                }
        }



});






bot.login(process.env.token);
