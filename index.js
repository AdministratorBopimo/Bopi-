const botconfig = require("./botconfig.json")
const items = require("./items.json")
const Discord = require('discord.js');
const colours = require("./colours")
const bot = new Discord.Client();
const prefix = botconfig.prefix;
bot.on("message", (message) => {
        if(message.content == "status")
                message.channel.sendMessage('Bot is working fine');
        if(message.content == `${prefix}shorthand`) {
                 let sEmbed = new Discord.RichEmbed()
                .setColor(colours.gold)
                .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
                .setTitle("Shorthand")
                .setURL("https://pastebin.com/N4gaZNb6")
                //bottm part
                 .setTimestamp()
                .setFooter("Made by Administrator")
                 message.channel.send({embed: sEmbed}); //sending the embed
                } 
 //rs
    if(message.content == `${prefix}rs`) {
            let sEmbed = new Discord.RichEmbed()
            .setColor(colours.gold)
            .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
            .setTitle(items.rs.title)
            .setURL(items.rs.url)
            .setThumbnail(items.rs.thumbnail)
            .addField("Value", items.rs.value , true)
            .addField("Copies", items.rs.copies, true)
            .addField("Demand", items.rs.demand, true)
            .addField("Status", items.rs.status, true)
            //bottm part
            .setTimestamp()
            .setFooter("Made by Administrator")
            message.channel.send({embed: sEmbed}); //sending the embed
    } 
//lum
       if(message.content == `${prefix}lumine`) {
        let sEmbed = new Discord.RichEmbed()
        .setColor(colours.gold)
        .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
        .setTitle(items.lum.title)
        .setURL(items.lum.url)
        .setThumbnail(items.lum.thumbnail)
        .addField("Value", items.lum.value , true)
        .addField("Copies", items.lum.copies, true)
        .addField("Demand", items.lum.demand, true)
        .addField("Status", items.lum.status, true)
        //bottm part
        .setTimestamp()
        .setFooter("Made by Administrator")
        message.channel.send({embed: sEmbed}); //sending the embed
}
//lum
if(message.content == `${prefix}cruento`) {
        let sEmbed = new Discord.RichEmbed()
        .setColor(colours.gold)
        .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
        .setTitle(items.cru.title)
        .setURL(items.cru.url)
        .setThumbnail(items.cru.thumbnail)
        .addField("Value", items.cru.value , true)
        .addField("Copies", items.cru.copies, true)
        .addField("Demand", items.cru.demand, true)
        .addField("Status", items.cru.status, true)
        //bottm part
        .setTimestamp()
        .setFooter("Made by Administrator")
        message.channel.send({embed: sEmbed}); //sending the embed
} 
//lum
if(message.content == `${prefix}arc`) {
        let sEmbed = new Discord.RichEmbed()
        .setColor(colours.gold)
        .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
        .setTitle(items.arc.title)
        .setURL(items.arc.url)
        .setThumbnail(items.arc.thumbnail)
        .addField("Value", items.arc.value , true)
        .addField("Copies", items.arc.copies, true)
        .addField("Demand", items.arc.demand, true)
        .addField("Status", items.arc.status, true)
        //bottm part
        .setTimestamp()
        .setFooter("Made by Administrator")
        message.channel.send({embed: sEmbed}); //sending the embed
} 

if(message.content == `${prefix}ovrl`) {
        let sEmbed = new Discord.RichEmbed()
        .setColor(colours.gold)
        .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
        .setTitle(items.ovrl.title)
        .setURL(items.ovrl.url)
        .setThumbnail(items.ovrl.thumbnail)
        .addField("Value", items.ovrl.value , true)
        .addField("Copies", items.ovrl.copies, true)
        .addField("Demand", items.ovrl.demand, true)
        .addField("Status", items.ovrl.status, true)
        //bottm part
        .setTimestamp()
        .setFooter("Made by Administrator")
        message.channel.send({embed: sEmbed}); //sending the embed
} 

if(message.content == `${prefix}lum antlers`) {
        let sEmbed = new Discord.RichEmbed()
        .setColor(colours.gold)
        .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
        .setTitle(items.lumantelrs.title)
        .setURL(items.lumantelrs.url)
        .setThumbnail(items.lumantelrs.thumbnail)
        .addField("Value", items.lumantelrs.value , true)
        .addField("Copies", items.lumantelrs.copies, true)
        .addField("Demand", items.lumantelrs.demand, true)
        .addField("Status", items.lumantelrs.status, true)
        //bottm part
        .setTimestamp()
        .setFooter("Made by Administrator")
        message.channel.send({embed: sEmbed}); //sending the embed
} 
if(message.content == `${prefix}arc antlers`) {
        let sEmbed = new Discord.RichEmbed()
        .setColor(colours.gold)
        .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
        .setTitle(items.arcantelrs.title)
        .setURL(items.arcantelrs.url)
        .setThumbnail(items.arcantelrs.thumbnail)
        .addField("Value", items.arcantelrs.value , true)
        .addField("Copies", items.arcantelrs.copies, true)
        .addField("Demand", items.arcantelrs.demand, true)
        .addField("Status", items.arcantelrs.status, true)
        //bottm part
        .setTimestamp()
        .setFooter("Made by Administrator")
        message.channel.send({embed: sEmbed}); //sending the embed
} 
if(message.content == `${prefix}grf`) {
        let sEmbed = new Discord.RichEmbed()
        .setColor(colours.gold)
        .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
        .setTitle(items.grf.title)
        .setURL(items.grf.url)
        .setThumbnail(items.grf.thumbnail)
        .addField("Value", items.grf.value , true)
        .addField("Copies", items.grf.copies, true)
        .addField("Demand", items.grf.demand, true)
        .addField("Status", items.grf.status, true)
        //bottm part
        .setTimestamp()
        .setFooter("Made by Administrator")
        message.channel.send({embed: sEmbed}); //sending the embed
} 
if(message.content == `${prefix}pge`) {
        let sEmbed = new Discord.RichEmbed()
        .setColor(colours.gold)
        .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
        .setTitle(items.pge.title)
        .setURL(items.pge.url)
        .setThumbnail(items.pge.thumbnail)
        .addField("Value", items.pge.value , true)
        .addField("Copies", items.pge.copies, true)
        .addField("Demand", items.pge.demand, true)
        .addField("Status", items.pge.status, true)
        //bottm part
        .setTimestamp()
        .setFooter("Made by Administrator")
        message.channel.send({embed: sEmbed}); //sending the embed
} 
if(message.content == `${prefix}vr`) {
        let sEmbed = new Discord.RichEmbed()
        .setColor(colours.gold)
        .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
        .setTitle(items.vr.title)
        .setURL(items.vr.url)
        .setThumbnail(items.vr.thumbnail)
        .addField("Value", items.vr.value , true)
        .addField("Copies", items.vr.copies, true)
        .addField("Demand", items.vr.demand, true)
        .addField("Status", items.vr.status, true)
        //bottm part
        .setTimestamp()
        .setFooter("Made by Administrator")
        message.channel.send({embed: sEmbed}); //sending the embed
} 
if(message.content == `${prefix}wge`) {
        let sEmbed = new Discord.RichEmbed()
        .setColor(colours.gold)
        .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
        .setTitle(items.wge.title)
        .setURL(items.wge.url)
        .setThumbnail(items.wge.thumbnail)
        .addField("Value", items.wge.value , true)
        .addField("Copies", items.wge.copies, true)
        .addField("Demand", items.wge.demand, true)
        .addField("Status", items.wge.status, true)
        //bottm part
        .setTimestamp()
        .setFooter("Made by Administrator")
        message.channel.send({embed: sEmbed}); //sending the embed
} 
if(message.content == `${prefix}maple`) {
        let sEmbed = new Discord.RichEmbed()
        .setColor(colours.gold)
        .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
        .setTitle(items.maple.title)
        .setURL(items.maple.url)
        .setThumbnail(items.maple.thumbnail)
        .addField("Value", items.maple.value , true)
        .addField("Copies", items.maple.copies, true)
        .addField("Demand", items.maple.demand, true)
        .addField("Status", items.maple.status, true)
        //bottm part
        .setTimestamp()
        .setFooter("Made by Administrator")
        message.channel.send({embed: sEmbed}); //sending the embed
} 
if(message.content == `${prefix}cory`) {
        let sEmbed = new Discord.RichEmbed()
        .setColor(colours.gold)
        .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
        .setTitle(items.cory.title)
        .setURL(items.cory.url)
        .setThumbnail(items.cory.thumbnail)
        .addField("Value", items.cory.value , true)
        .addField("Copies", items.cory.copies, true)
        .addField("Demand", items.cory.demand, true)
        .addField("Status", items.cory.status, true)
        //bottm part
        .setTimestamp()
        .setFooter("Made by Administrator")
        message.channel.send({embed: sEmbed}); //sending the embed
} 
if(message.content == `${prefix}book`) {
        let sEmbed = new Discord.RichEmbed()
        .setColor(colours.gold)
        .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
        .setTitle(items.book.title)
        .setURL(items.book.url)
        .setThumbnail(items.book.thumbnail)
        .addField("Value", items.book.value , true)
        .addField("Copies", items.book.copies, true)
        .addField("Demand", items.book.demand, true)
        .addField("Status", items.book.status, true)
        //bottm part
        .setTimestamp()
        .setFooter("Made by Administrator")
        message.channel.send({embed: sEmbed}); //sending the embed
} 
if(message.content == `${prefix}malum`) {
        let sEmbed = new Discord.RichEmbed()
        .setColor(colours.gold)
        .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
        .setTitle(items.malum.title)
        .setURL(items.malum.url)
        .setThumbnail(items.malum.thumbnail)
        .addField("Value", items.malum.value , true)
        .addField("Copies", items.malum.copies, true)
        .addField("Demand", items.malum.demand, true)
        .addField("Status", items.malum.status, true)
        //bottm part
        .setTimestamp()
        .setFooter("Made by Administrator")
        message.channel.send({embed: sEmbed}); //sending the embed
} 
if(message.content == `${prefix}ovrl staff`) {
        let sEmbed = new Discord.RichEmbed()
        .setColor(colours.gold)
        .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
        .setTitle(items.ovrlstaff.title)
        .setURL(items.ovrlstaff.url)
        .setThumbnail(items.ovrlstaff.thumbnail)
        .addField("Value", items.ovrlstaff.value , true)
        .addField("Copies", items.ovrlstaff.copies, true)
        .addField("Demand", items.ovrlstaff.demand, true)
        .addField("Status", items.ovrlstaff.status, true)
        //bottm part
        .setTimestamp()
        .setFooter("Made by Administrator")
        message.channel.send({embed: sEmbed}); //sending the embed
} 
if(message.content == `${prefix}mh`) {
        let sEmbed = new Discord.RichEmbed()
        .setColor(colours.gold)
        .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
        .setTitle(items.mh.title)
        .setURL(items.mh.url)
        .setThumbnail(items.mh.thumbnail)
        .addField("Value", items.mh.value , true)
        .addField("Copies", items.mh.copies, true)
        .addField("Demand", items.mh.demand, true)
        .addField("Status", items.mh.status, true)
        //bottm part
        .setTimestamp()
        .setFooter("Made by Administrator")
        message.channel.send({embed: sEmbed}); //sending the embed
} 
if(message.content == `${prefix}vantas`) {
        let sEmbed = new Discord.RichEmbed()
        .setColor(colours.gold)
        .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
        .setTitle(items.vbs.title)
        .setURL(items.vbs.url)
        .setThumbnail(items.vbs.thumbnail)
        .addField("Value", items.vbs.value , true)
        .addField("Copies", items.vbs.copies, true)
        .addField("Demand", items.vbs.demand, true)
        .addField("Status", items.vbs.status, true)
        //bottm part
        .setTimestamp()
        .setFooter("Made by Administrator")
        message.channel.send({embed: sEmbed}); //sending the embed
} 
if(message.content == `${prefix}explorer`) {
        let sEmbed = new Discord.RichEmbed()
        .setColor(colours.gold)
        .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
        .setTitle(items.eh.title)
        .setURL(items.eh.url)
        .setThumbnail(items.eh.thumbnail)
        .addField("Value", items.eh.value , true)
        .addField("Copies", items.eh.copies, true)
        .addField("Demand", items.eh.demand, true)
        .addField("Status", items.eh.status, true)
        //bottm part
        .setTimestamp()
        .setFooter("Made by Administrator")
        message.channel.send({embed: sEmbed}); //sending the embed
} 

if(message.content == `${prefix}binary`) {
        let sEmbed = new Discord.RichEmbed()
        .setColor(colours.gold)
        .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
        .setTitle(items.binary.title)
        .setURL(items.binary.url)
        .setThumbnail(items.binary.thumbnail)
        .addField("Value", items.binary.value , true)
        .addField("Copies", items.binary.copies, true)
        .addField("Demand", items.binary.demand, true)
        .addField("Status", items.binary.status, true)
        //bottm part
        .setTimestamp()
        .setFooter("Made by Administrator")
        message.channel.send({embed: sEmbed}); //sending the embed
} 
if(message.content == `${prefix}specs`) {
        let sEmbed = new Discord.RichEmbed()
        .setColor(colours.gold)
        .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
        .setTitle(items.spec.title)
        .setURL(items.spec.url)
        .setThumbnail(items.spec.thumbnail)
        .addField("Value", items.spec.value , true)
        .addField("Copies", items.spec.copies, true)
        .addField("Demand", items.spec.demand, true)
        .addField("Status", items.spec.status, true)
        //bottm part
        .setTimestamp()
        .setFooter("Made by Administrator")
        message.channel.send({embed: sEmbed}); //sending the embed
} 
if(message.content == `${prefix}god`) {
        let sEmbed = new Discord.RichEmbed()
        .setColor(colours.gold)
        .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
        .setTitle(items.god.title)
        .setURL(items.god.url)
        .setThumbnail(items.god.thumbnail)
        .addField("Value", items.god.value , true)
        .addField("Copies", items.god.copies, true)
        .addField("Demand", items.god.demand, true)
        .addField("Status", items.god.status, true)
        //bottm part
        .setTimestamp()
        .setFooter("Made by Administrator")
        message.channel.send({embed: sEmbed}); //sending the embed
} 
if(message.content == `${prefix}solar`) {
        let sEmbed = new Discord.RichEmbed()
        .setColor(colours.gold)
        .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
        .setTitle(items.solar.title)
        .setURL(items.solar.url)
        .setThumbnail(items.solar.thumbnail)
        .addField("Value", items.solar.value , true)
        .addField("Copies", items.solar.copies, true)
        .addField("Demand", items.solar.demand, true)
        .addField("Status", items.solar.status, true)
        //bottm part
        .setTimestamp()
        .setFooter("Made by Administrator")
        message.channel.send({embed: sEmbed}); //sending the embed
} 
if(message.content == `${prefix}cave`) {
        let sEmbed = new Discord.RichEmbed()
        .setColor(colours.gold)
        .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
        .setTitle(items.cave.title)
        .setURL(items.cave.url)
        .setThumbnail(items.cave.thumbnail)
        .addField("Value", items.cave.value , true)
        .addField("Copies", items.cave.copies, true)
        .addField("Demand", items.cave.demand, true)
        .addField("Status", items.cave.status, true)
        //bottm part
        .setTimestamp()
        .setFooter("Made by Administrator")
        message.channel.send({embed: sEmbed}); //sending the embed
} 
if(message.content == `${prefix}med crate`) {
        let sEmbed = new Discord.RichEmbed()
        .setColor(colours.gold)
        .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
        .setTitle(items.mcrate.title)
        .setURL(items.mcrate.url)
        .setThumbnail(items.mcrate.thumbnail)
        .addField("Value", items.mcrate.value , true)
        .addField("Copies", items.mcrate.copies, true)
        .addField("Demand", items.mcrate.demand, true)
        .addField("Status", items.mcrate.status, true)
        //bottm part
        .setTimestamp()
        .setFooter("Made by Administrator")
        message.channel.send({embed: sEmbed}); //sending the embed
} 

if(message.content == `${prefix}blox crate`) {
        let sEmbed = new Discord.RichEmbed()
        .setColor(colours.gold)
        .setAuthor("BrickPlanet+", items.author.icon, items.author.server)
        .setTitle(items.bloxcrate.title)
        .setURL(items.bloxcrate.url)
        .setThumbnail(items.bloxcrate.thumbnail)
        .addField("Value", items.bloxcrate.value , true)
        .addField("Copies", items.bloxcrate.copies, true)
        .addField("Demand", items.bloxcrate.demand, true)
        .addField("Status", items.bloxcrate.status, true)
        //bottm part
        .setTimestamp()
        .setFooter("Made by Administrator")
        message.channel.send({embed: sEmbed}); //sending the embed
} 

  
});

bot.login(process.env.token);
