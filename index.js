
const botconfig = require("./botconfig.json")
var items = require("./items.json")
const Discord = require('discord.js');
const colours = require("./colours")
const group = require("./groups.js")
const itemss = require("./items.js")

//const groups = require("./groups.js")
//const itemss = require("./items.js")
var fs = require('fs');

const bot = new Discord.Client();
const prefix = botconfig.prefix;
const userprefix = botconfig.userprefix;

var prefixes = ['lumine', 'rs', "cruento", "arc", "ovrl", "lum antlers", "cru antlers","arc antlers","grf", "pge", "vr", "wge", "maple", "maple hood", "cory", "book", "ovrl staff", "vantas", "ws", "malum", 
        "explorer", "cave", "godlike", "binary", "solar", "blox crate", "med crate", "rc", "wcf", "ushanka"];
        //item ids
var ids = [295173, 294848, 295160, 295162, 287854, 295437, 295531, 295530, 295161, 294108, 298828, 288034, 300331, 300330, 296728, 300333, 297577, 287940, 292934, 300997, 
        288960, 290604, 290025, 295195, 301362, 293638, 290617, 296673, 289294, 287989];
        //item values
var valueId =  [302233, 302245, 302232, 302234, 302240, 302236, 302237, 302235, 302231, 302229 , 302279, 302230, 302238, 302239, 302244, 302242, 302241, 302280, 302281, 302283,
        302243, 302284, 302285, 302286, 302287, 302288, 302289, 302290, 302292, 302293]
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
        .addField("Value", val.Name , true)
        .addField("Copies", item.NumOwners, true)
        .addField("Demand", demand, true)
        .addField("Status", status, true)
        .addField("Estimated Bits", `<:bits:618482702215151677>${item.EstimatedValueBits}`, true)
        .addField("Estimated Credits", `<:credits:618482404058988575>${item.EstimatedValueCredits}`, true)
        .addField("Proof","https://gyazo.com/" + val.Description, true)
        //bottm part
        .setTimestamp()
        .setFooter("Made by Administrator")
        message.channel.send({embed: sEmbed}); //sending the embed 
        });
        });
    }
}

//user search

if (message.content.startsWith(`${userprefix}` + "user")) {     
        var parameters = message.content.split(" ");
        var userName = parameters[1];
        //fetch
        const request = require('request');
        request.get(`https://www.brickplanet.com/web-api/users/get-user/${userName}`, (err, res, userN) => {
        let user = JSON.parse(userN)
        if (user.IsAstro == 1) {
            var astro = "<:astro:619918970786414602>"
        }
        else {
            astro = "<:notadmin:619916084279115787>"
        }
        //net worth
        if (astro == "<:astro:619918970786414602>"){
            var netWorth = user.NetWorthCredits
        }
        else {
            netWorth = "Not public"
        }
        //verified
        if (user.VerifiedUser == 1){
            var verified = "<:verified:619911977728213052>"
        }
        //staff
        if (user.Username == "Administratoor"){
            var staff = "<:staff:619992837005770754>"
        }
        else {
            staff = "<:notadmin:619916084279115787>"
        }
        //verified
        if (user.IsAdmin == 1){
            var admin = "<:admin:619915758637678629>"
        }
        else {
            admin = "<:notadmin:619916084279115787>"
        }
        if (user.msg == "Invalid User Id"){
            let sEmbed = new Discord.RichEmbed()
            .setColor(colours.gold)
            .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
            .setTitle("User not found " + "<:notadmin:619916084279115787>")     
            .setTimestamp()
            .setFooter("Made by Administrator")
            message.channel.send({embed: sEmbed});
        }
        else{
            if (user.ID == "184069") {
                let sEmbed = new Discord.RichEmbed()
            .setColor(colours.gold)
            .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
            .setTitle(user.Username)
            .addField("ID", user.ID)
            .setURL("https://www.brickplanet.com/users/" + user.Username)
            .setThumbnail("https://cdn.brickplanet.com/" + user.AvatarImage + ".png")
            //options
            .addField("BP+ Staff", staff, true)
            .addField("Profile Views", user.ProfileViews, true)
            .addField("Verified", verified, true)
            .addField("Admin", admin, true)
            //bottm part
            .setTimestamp()
            .setFooter("Made by Administrator")
            message.channel.send({embed: sEmbed});
            }
            else {
            let sEmbed = new Discord.RichEmbed()
            .setColor(colours.gold)
            .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
            .setTitle(user.Username)
            .addField("ID", user.ID)
            .setURL("https://www.brickplanet.com/users/" + user.Username)
            .setThumbnail("https://cdn.brickplanet.com/" + user.AvatarImage + ".png")
            //options
            .addField("Astro", astro, true)
            .addField("Net Worth", `<:credits:618482404058988575>${netWorth}`, true)
            .addField("Profile Views", user.ProfileViews, true)
            .addField("Forum Posts", user.ForumPosts, true)
            .addField("Verified", verified, true)
            .addField("Admin", admin, true)
            .addField("BP+ Staff", staff, true)
            //bottm part
            .setTimestamp()
            .setFooter("Made by Administrator")
            message.channel.send({embed: sEmbed});
            }
        }
        
        });
    }

});


bot.login(process.env.token);
