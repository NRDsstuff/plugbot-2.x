
const fs = require('fs')

module.exports = {
    name: "help",
    desc: "help menu",
    usage: "help",
    func: function help(client){
        console.log(client.cmds)
    }
}