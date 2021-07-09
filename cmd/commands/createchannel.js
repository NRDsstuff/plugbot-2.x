
const plugbotsdk = require('../../modules/plugbotsdk')

module.exports = {
    name: "createchannel",
    desc: "create a text channel",
    usage: "createchannel [guild ID] [channel name]",
    func: function exit(client, args){
        plugbotsdk.createChannel(client, args[1], {type: "text"}, args[2], "cmdline", "createchannel")
    }
}