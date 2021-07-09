
const fs = require('fs')

module.exports = {
    name: "pluginlist",
    desc: "shows all the loaded plugins",
    usage: "pluginlist",
    func: function lp(client){
        const plugins = fs.readdirSync('./plugins').filter(file => file.endsWith(`bot.js`));
        for(const file of plugins){
            const plugin = require(`../../plugins/${file}`);

            client.plugins.set(plugin.name, plugin)
        }
        const pluginsp = fs.readdirSync('./plugins').filter(file => file.endsWith(`client.js`));
        for(const file of pluginsp){
            const plugin = require(`../../plugins/${file}`);

            client.plugins.set(plugin.name, plugin)
        }
        const pluginspp = fs.readdirSync('./plugins').filter(file => file.endsWith(`.plugin.js`));
        for(const file of pluginspp){
            const plugin = require(`../../plugins/${file}`);

            client.plugins.set(plugin.name, plugin)
        }
        console.log(client.plugins)
    }
}