
const plugbotsdk = require('../../modules/plugbotsdk')
const config = require('../../configs/cmd/deletechannel.json')

module.exports = {
    name: "deletechannel",
    desc: "delete a channel",
    usage: "deletechannel [ID/name] [guild id] [channel id/channel name]",
    func: function exit(client, args){
        switch(args[1]){
                        
            case "ID":
                
                plugbotsdk.deleteChannelByID(client, args[2], args[3], "cmdline", "deletechannel")
            break;
        
            case "name":
        
                plugbotsdk.deleteChannelByName(client, args[2], args[3], "cmdline", "deletechannel")
            break;
        
            default: 
                console.log(config.error)
            break;
            
        }
    }
}
