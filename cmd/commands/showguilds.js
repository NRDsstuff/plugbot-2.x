module.exports = {
    name: "showguilds",
    desc: "shows all the guilds the bot is in",
    usage: "showguilds",
    func: function sg(client){
        console.log(client.guilds)
    }
}