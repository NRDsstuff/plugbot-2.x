
// wow that's a lot of dependencies

const mainConfig = require('../mainconfig.json')
const Discord = require('discord.js');
const client = new Discord.Client()
const readline = require("readline");
const plugbotsdk = require("../modules/plugbotsdk");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const fs = require('fs');
client.plugins = new Discord.Collection()
client.cmds = new Discord.Collection()
const config = require('../configs/cmd/bashrc.json')

// set the PS1

rl.setPrompt(config.PS1);

module.exports = {
    name: "cmdline",
    run: function cmdline(){

        // load all plugins that run on startup

        const plugins = fs.readdirSync('./plugins').filter(file => file.endsWith(`ONREADY.js`));
        for(const file of plugins){
            const plugin = require(`../plugins/${file}`);

            client.plugins.set(plugin.name, plugin)

            client.plugins.get(`${plugin.name}`).func(client)
        }

        // a little "hello"

        console.log(`\nHEY YOU! yes, you! \ntype help for a list of commands\n`)

        rl.prompt();

        const cmds = fs.readdirSync(config.PATH).filter(file => file.endsWith(`.js`));
        for(const file of cmds){
            const cmd = require(`.${config.PATH}/${file}`);

            client.cmds.set(cmd.name, cmd)
        }

        // actual cmdline
        
        rl.on("line", function(line){

            // history logging

            plugbotsdk.log(`entered ${line} into the cmd.`, 'cmdline', 'cmdhandler')

            // normal command handler stuff

            const args = line.split(" ")

            const command = client.cmds.get(args[0]) || client.cmds.find(cmd => cmd.aliases && cmd.aliases.includes(args[0]));

            // if i didn't put this here, bot would crash on unexistent commands

            if(command){
                client.cmds.get(`${args[0]}`).func(client, args, line)
            }else{

                // shhh

                if(args[0] === `amogus`){
                    console.log(`sus sus amogus amogus sus sus amogus amogus sus sus`)

                // normal unexistent command handling stuff

                }else{
                    plugbotsdk.log(`called out unexistent command ${args[0]}.`, "cmdline", "cmdhandler")
                }
            }
      
            // make it work 

            rl.prompt();

        }).on("close", function() {

            // a little thing

            plugbotsdk.log(`session ended.`, "cmdline", "session")
            process.exit(0);
        })

        // login

        client.login(mainConfig.token)
    }
}

