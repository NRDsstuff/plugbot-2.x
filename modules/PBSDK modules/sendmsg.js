const logger = require("../logger");

module.exports = async (client, guildID, channelID, content, logsDestination) =>{
    let channel = client.guilds.cache.get(guildID).channels.cache.find(r => r.id === channelID);

    channel.send(content)
    await logger.save(`sent ${content} in channel ${channel.name} with ID ${channelID}`, logsDestination)
}