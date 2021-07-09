const plugbotsdk = require('../../modules/plugbotsdk');

var exec = require('child_process').exec, child;

module.exports = {
    name: "exec",
    desc: "execute a command without shutting down the bot",
    usage: "exec [command]",
    func: function exit(client, args, line){       

        exec(line.substring(args[0].length),
            function (error, stdout, stderr) {
                if (error !== null) {
                    plugbotsdk.log(`execution error: ${error}`, 'cmdline', 'exec')
                }
            });
        }
}