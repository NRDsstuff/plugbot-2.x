
const config = require('../../configs/cmd/sendmsg.json')
const plugbotsdk = require('../../modules/plugbotsdk')
module.exports = {
    name: "sendmsg",
    desc: "send a message from your terminal of choice!",
    usage: "sendmsg [ID/name] [server id] [channel id/channel name] [message]",
    func: function sendmsg(client, args, line){

        const twosymbol = `abc`

        switch(args[1]){
                        
            case "ID":
                const sendmsgID = line.substring(args[0].length + args[1].length + args[2].length + args[3].length + twosymbol.length)
                plugbotsdk.sendInChannelByID(client, args[2], args[3], sendmsgID, "cmdline", "sendmsg")
            break;
        
            case "name":
                const sendmsgName = line.substring(args[0].length + args[1].length + args[2].length + args[3].length + twosymbol.length)
                plugbotsdk.sendInChannelByName(client, args[2], args[3], sendmsgName, "cmdline", "sendmsg")
            break;
        
            default: 
                console.log(config.error)
            break;
            
        }
    }
}