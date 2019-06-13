//should be renamed bot.js


var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `/`
    if (message.substring(0, 1) == '/') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            // Just add any case commands if you want to..
			case 'weak':
				var type1 = prompt("Please enter the Pokemon's first element", "<element goes here>");
				var type2 = prompt("Please enter the Pokemon's second element", "<leave as-is if nonexistant>");
				
				};
				if (type1 != null) {
					if (type2 != null) {
						NormalTypes = [type1.NormalTypes, type2.NormalTypes]
						ImmuneTypes = [type1.ImmuneTypes, type2.ImmuneTypes]
						HalfTypes = [type1.HalfTypes, type2.HalfTypes]
						DoubleTypes = [type1.DoubleTypes, type2.DoubleTypes]
					}
				}
				bot.sendMessage({
                    to: channelID,
                    message: 
					"This Pokemon is weak to: " + DoubleTypes + "!"\n
					"This Pokemon is strong against: " + HalfTypes + "!"\n
					"This Pokemon is immune to: " + ImmuneTypes + "!"\n
					"This Pokemon receives normal damage against: " + NormalTypes + "!"
         }
     }
});





	
	
	
