
const Discord = require('discord.js')
const logger = require('./logger')
const sendmsg = require('./PBSDK modules/sendmsg')

module.exports = {
    log: function log(logged, pluginName, pluginPart){

        logger.save(logged, `./logs/${pluginName}/${pluginPart}.txt`)
    },
    reply: async function sendMsg(client, content, message, pluginName, pluginPart){

        sendmsg(client, message.guild.id, message.channel.id, content, `./logs/${pluginName}/${pluginPart}`)
    },
    replyInDms: async function sendInDms(message, content, pluginName, pluginPart){

        message.author.send(content)

        await logger.save(`sent ${content}`, `./logs/${pluginName}/${pluginPart}.txt`)
    },
    replyQuickEmbed: async function qe(message, title, desc, color, pluginName, pluginPart){

        const qe = new Discord.MessageEmbed()
        .setTitle(title)
        .setDescription(desc)
        .setColor(color)

        message.channel.send(qe)

        await logger.save(`sent embed. content: \n TITLE: ${title} \n DESCRIPTION: ${desc} \n COLOR: ${color}`, `./logs/${pluginName}/${pluginPart}.txt`)
    },
    replyInDmsQuickEmbed: async function qe(message, title, desc, color, pluginName, pluginPart){

        const qe = new Discord.MessageEmbed()
        .setTitle(title)
        .setDescription(desc)
        .setColor(color)

        message.author.send(qe)

        await logger.save(`sent embed. content: \n TITLE: ${title} \n DESCRIPTION: ${desc} \n COLOR: ${color}`, `./logs/${pluginName}/${pluginPart}.txt`)
    },
    randomPing: async function rp(message, pluginName, pluginPart){

        let member = message.guild.members.cache.random();

        let embed = new Discord.MessageEmbed()
        .setDescription(member)

        await message.channel.send(embed)

        await logger.save(`pinged someone`, `./logs/${pluginName}/${pluginPart}.txt`)
    },
    repeatAfterUser: async function rau(message, prefix, commandName, pluginName, pluginPart){
        
        message.channel.send(message.content.substring(prefix.length + commandName.length))

        await logger.save(`repeated ${message.content.substring(prefix.length + commandName.length)}`, `./logs/${pluginName}/${pluginPart}.txt`)
    },
    giveRoleByName: async function grname(guild, member, roleName, pluginName, pluginPart){
        
        let role = guild.roles.cache.find(r => r.name === roleName);
        await logger.save(`found role with an id of ${roleName}`, `./logs/${pluginName}/${pluginPart}.txt`)

        await member.roles.add(role)
        await logger.save(`gave role ${roleName}`, `./logs/${pluginName}/${pluginPart}.txt`)
    },
    giveRoleByID: async function grid(guild, member, roleID, pluginName, pluginPart){

        let role = guild.roles.cache.find(r => r.id === roleID);
        await logger.save(`found role with an id of ${roleID}`, `./logs/${pluginName}/${pluginPart}.txt`)

        await member.roles.add(role)
        await logger.save(`gave role with and id of ${roleID}`, `./logs/${pluginName}/${pluginPart}.txt`)
    },
    removeRoleByName: async function rrname(guild, member, roleName, pluginName, pluginPart){
        
        let role = guild.roles.cache.find(r => r.name === roleName);
        await logger.save(`found role ${roleName}`, `./logs/${pluginName}/${pluginPart}.txt`)

        await member.roles.remove(role)
        await logger.save(`removed ${roleName}`, `./logs/${pluginName}/${pluginPart}.txt`)
    },
    removeRoleByID: async function grid(guild, member, roleID, pluginName, pluginPart){

        let role = guild.roles.cache.find(r => r.id === roleID);
        await logger.save(`found role with an id of ${roleID}`, `./logs/${pluginName}/${pluginPart}.txt`)

        await member.roles.remove(role)
        await logger.save(`removed role with and id of ${roleID}`, `./logs/${pluginName}/${pluginPart}.txt`)
    },
    createChannel: async function cc(client, guildID, channelData, channelName, pluginName, pluginPart){

        client.guilds.cache.get(guildID).channels.create(channelName, channelData)
        await logger.save(`created channel ${channelName}.`, `./logs/${pluginName}/${pluginPart}.txt`)
    },
    deleteChannelByName: async function dc(client, guildID, channelName, pluginName, pluginPart){

        let channel = client.guilds.cache.get(guildID).channels.cache.find(r => r.name === `${channelName}`);

        if(!channel.deletable) return;
        
        await channel.delete()

        await logger.save(`deleted channel ${channelName}`, `./logs/${pluginName}/${pluginPart}.txt`)
    },
    deleteChannelByID: async function dc(client, guildID, channelID, pluginName, pluginPart){

        let channel = client.guilds.cache.get(guildID).channels.cache.find(r => r.id === channelID);

        if(!channel.deletable) return;
        
        await channel.delete()

        await logger.save(`deleted channel with an id of ${channelID}`, `./logs/${pluginName}/${pluginPart}.txt`)
    },
    quickReact: async function react(message, reaction, pluginName, pluginPart){
        
        message.react(reaction)
        
        await logger.save(`reacted to a message. \n REACTION: ${reaction}`, `./logs/${pluginName}/${pluginPart}.txt`)
    },
    delete: async function deleteMsg(message, pluginName, pluginPart){

        message.delete()

        await logger.save(`deleted ${message.content}`, `./logs/${pluginName}/${pluginPart}.txt`)
    },
    bulkDelete: async function deleteMsg(message, amount, pluginName, pluginPart){

        message.channel.bulkDelete(amount)

        await logger.save(`deleted ${amount} of messages`, `./logs/${pluginName}/${pluginPart}.txt`)
    },
    cloneChannelByID: async function clone(client, guildID, channelID, pluginName, pluginPart){

        let channel = client.guilds.cache.get(guildID).channels.cache.get(channelID);
        await channel.clone()

        await logger.save(`cloned channel with and id of ${channelID}`, `./logs/${pluginName}/${pluginPart}.txt`)
    },
    cloneChannelByName: async function clone(guild, channelName, pluginName, pluginPart){

        let channel = client.guilds.cache.get(guildID).channels.cache.find(r => r.name === `${channelName}`);
        await channel.clone()

        await logger.save(`cloned #${channelName}`, `./logs/${pluginName}/${pluginPart}.txt`)
    },
    sendInChannelByID: async function SIC(client, guildID, channelID, message, pluginName, pluginPart){
        
        sendmsg(client, guildID, channelID, message, `./logs/${pluginName}/${pluginPart}.txt`)
    },
    sendInChannelByName: async function SIC(client, guildID, channelName, message, pluginName, pluginPart){
        
        let channel = client.guilds.cache.get(guildID).channels.cache.find(r => r.name === channelName);
        
        sendmsg(client, guildID, channel.id, message, `./logs/${pluginName}/${pluginPart}.txt`)
    },
    replyWithReaction: async function RWR(message, content, reaction, pluginName, pluginPart){

        async function sugoma(message, content, reaction, pluginName, pluginPart){
            
            const m = await message.channel.send(content)
            await logger.save(`sent ${content}`, `./logs/${pluginName}/${pluginPart}.txt`)
            
            async function quickReact(message, reaction, pluginName, pluginPart){

                message.react(reaction)
        
                await logger.save(`reacted to a message. \n REACTION: ${reaction}`, `./logs/${pluginName}/${pluginPart}.txt`)
            }
            
            quickReact(m, reaction, pluginName, pluginPart)
        }
        
        sugoma(message, content, reaction, pluginName, pluginPart)
    },
    repeatWithReaction: async function RWR(message, prefix, commandName, reaction, pluginName, pluginPart){

        async function sugoma(message, prefix, commandName, reaction, pluginName, pluginPart){

            const send = message.content.substring(prefix.length + commandName.length)
            
            const m = await message.channel.send(send)
            await logger.save(`sent ${send}`, `./logs/${pluginName}/${pluginPart}.txt`)
            
            async function quickReact(message, reaction, pluginName, pluginPart){

                message.react(reaction)
        
                await logger.save(`reacted to a message. \n REACTION: ${reaction}`, `./logs/${pluginName}/${pluginPart}.txt`)
            }
            
            quickReact(m, reaction, pluginName, pluginPart)
        }

        sugoma(message, prefix, commandName, reaction, pluginName, pluginPart)
        
    }
}