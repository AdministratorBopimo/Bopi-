
const botconfig = require("./botconfig.json")
var items = require("./items.json")
const Discord = require('discord.js');
const colours = require("./colours")

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
        else{
             verified = "<:notadmin:619916084279115787>"        
        }
        //staff
        if ((user.Username == "Administratoor" || user.Username == "Hypo" || user.Username == "Pippen")){
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
        if (user.IsOnline == 1){
            var online = "<:online:620359974635175936>"
        }
        else {
            online = "<:notadmin:619916084279115787>"
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
            if ((user.Username == "Administratoor" || user.Username == "Hypo" || user.Username == "Pippen")) {
                let sEmbed = new Discord.RichEmbed()
            .setColor(colours.gold)
            .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
            .setTitle(user.Username)
            .addField("ID", user.ID)
            .setURL("https://www.brickplanet.com/users/" + user.Username)
            .setThumbnail("https://cdn.brickplanet.com/" + user.AvatarImage + ".png")
            //options
            .addField("BP+ Staff", staff, true)
            .addField("Net Worth", `<:credits:618482404058988575>${netWorth}`, true)
            .addField("Verified", verified, true)
            .addField("Admin", admin, true)
            .addField("Online", online, true)
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
             .addField("Online", online, true)

            //bottm part
            .setTimestamp()
            .setFooter("Made by Administrator")
            message.channel.send({embed: sEmbed});
            }
        }
        
        });
    }
    //item
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
                .addField("Owners", id.NumOwners, true)
                .setURL("https://www.brickplanet.com/store/")
                .setThumbnail("https://cdn.brickplanet.com/" + id.Image)
                //options
                .addField("On-Sale", onsale,true)
                .addField("Price Bits", `<:credits:618482702215151677>${id.PriceCredits}`, true)
                .addField("Price Credits",`<:bits:618482404058988575>${id.PriceBits}`, true)
                .addField("Description", (id.Description || 'No Description'), true)
                //bottm part
                .setTimestamp()
                .setFooter("Made by Administrator")
                message.channel.send({embed: sEmbed});
            }
        }
        )
    }
    //group
    if (message.content.startsWith(`${userprefix}` + "group")) {     
        var parameters = message.content.split(" ");
        var groupName = parameters[1];
    
        //fetch
        const request = require('request');
        request.get(`https://brickplanet.com/web-api/groups/get-group/${groupName}`, (err, res, groupN) => {
        let group = JSON.parse(groupN)
        let name = group.Name
        let owner = group.OwnerName
        //verified
        if (group.IsVerified == 1){
            var verified = "<:verified:619911977728213052>"
        }
        else {
            verified = "<:notadmin:619916084279115787>"
        }
        //main
        if (group.status == "error"){
            let sEmbed = new Discord.RichEmbed()
            .setColor(colours.gold)
            .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
            .setTitle("Group not found " + "<:notadmin:619916084279115787>")     
            .addField("Try another ID", "e.g - 1")
            .setTimestamp()
            .setFooter("Made by Administrator")
            message.channel.send({embed: sEmbed});
        }
        else{
             let sEmbed = new Discord.RichEmbed()
            .setColor(colours.gold)
            .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
            .setTitle(group.Name)
            .addField("Owner", owner)            
            .setURL('https://www.brickplanet.com/communities/')
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
        if (message.content.startsWith(`${userprefix}` + "owners")) {     
        var parameters = message.content.split(" ");
        var id = parameters[1];
    
        //main
        const request = require('request');
        request.get(`https://www.brickplanet.com/web-api/store/get-item/${id}`, (err, res, details) => {
        let item = JSON.parse(details)
        let own = item.Owners
        
        if (own == null) {
            let sEmbed = new Discord.RichEmbed()
            .setColor(colours.gold)
            .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
            .setTitle("Item owner list not found" + "<:notadmin:619916084279115787>")     
            .setTimestamp()
            .setFooter("Made by Administrator")
            message.channel.send({embed: sEmbed});
        } 
        else {
            var owners = own.split(',').join(', ');
            let sEmbed = new Discord.RichEmbed()
            .setColor(colours.gold)
            .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
            .setTitle(item.Name)
            .addField("Owners", item.NumOwners, true)
            .setURL("https://www.brickplanet.com/store/")
            .setThumbnail("https://cdn.brickplanet.com/" + item.Image)
            //options
            .addField("Owner-List", owners)
            
            //bottm part
            .setTimestamp()
            .setFooter("Made by Administrator")
            message.channel.send({embed: sEmbed});
        }              
             }
        )}
});

bot.login(process.env.token);
