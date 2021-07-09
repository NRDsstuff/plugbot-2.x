
const fs = require('fs')

module.exports = {
    name: "loadplugins",
    desc: "load plugins for the bot",
    usage: "loadplugins",
    func: function lp(client){
        const plugins = fs.readdirSync('./plugins').filter(file => file.endsWith(`bot.js`));
        for(const file of plugins){
            const plugin = require(`../../plugins/${file}`);

            client.plugins.set(plugin.name, plugin)

            client.plugins.get(`${plugin.name}`).func(client)
        }
        const pluginsp = fs.readdirSync('./plugins').filter(file => file.endsWith(`client.js`));
        for(const file of pluginsp){
            const plugin = require(`../../plugins/${file}`);

            client.plugins.set(plugin.name, plugin)

            client.plugins.get(`${plugin.name}`).func(client)
        }
        const pluginspp = fs.readdirSync('./plugins').filter(file => file.endsWith(`.plugin.js`));
        for(const file of pluginspp){
            const plugin = require(`../../plugins/${file}`);

            client.plugins.set(plugin.name, plugin)

            client.plugins.get(`${plugin.name}`).func(client)
        }
    }
}