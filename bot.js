const Discord = require('discord.js');
const {
	prefix,
	token,
} = require('./config.json');
const ytdl = require('ytdl-core');

const client = new Discord.Client();

const queue = new Map();

client.once('ready', () => {
	console.log('Ready, Shishou!');
});

client.once('reconnecting', () => {
	console.log('Wait for me, Shishou!');
});

client.once('disconnect', () => {
	console.log('Oyasumi!');
});

client.on('message', async message => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	const serverQueue = queue.get(message.guild.id);

	if (message.content.startsWith(`${prefix}play`)) {
		execute(message, serverQueue);
		return;
	} else if (message.content.startsWith(`${prefix}skip`)) {
		skip(message, serverQueue);
		return;
	} else if (message.content.startsWith(`${prefix}stop`)) {
		stop(message, serverQueue);
		return;
	} else if (message.content.startsWith(`${prefix}ping`)) {
		message.channel.send("Ah! Shishou, don't bully me!")
		return;
	} else if (message.content.startsWith(`${prefix}dl`)) {
		dl(message)
	} else {
		message.channel.send('Please enter a valid command, Shishou...')
	} 
});

async function execute(message, serverQueue) {
	const args = message.content.split(' ');

	const voiceChannel = message.member.voiceChannel;
	if (!voiceChannel) return message.channel.send('You need to be in a voice channel to play music!');
	const permissions = voiceChannel.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send('I need the permissions to join and speak in your voice channel!');
	}

	const songInfo = await ytdl.getInfo(args[1]);
	const song = {
		title: songInfo.title,
		url: songInfo.video_url,
	};
	
	/*if (err){
		server = ctx.message.server
		await client.say ('Music now playing...')
		voice_client = client.voice_client_in(server)
		player = await voice_client.create_ytdl_player(url, ytdl_options={'default_search': 'auto'} after=lambda: check_queue(server.id))
		players[server.id] = player
		player.start()	
	};
	*/
	if (!serverQueue) {
		const queueContruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true,
		};

		queue.set(message.guild.id, queueContruct);

		queueContruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueContruct.connection = connection;
			play(message.guild, queueContruct.songs[0]);
		} catch (err) {
			console.log(err);
			queue.delete(message.guild.id);
			return message.channel.send(err);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		return message.channel.send(`${song.title} added to the queue!`);
	}

}
/*
function dl(message) {
	ytdl.  | ffmpeg -i pipe:0 -b:a 192K -vn myfile.mp3
}
*/
function skip(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
	if (!serverQueue) return message.channel.send('There is no song that I could skip, Shishou!');
	serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
	serverQueue.songs = [];
	serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', () => {
			console.log('Party ended!');
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => {
			console.error(error);
		});
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
}

client.login(token);
            // Just add any case commands if you want to..
			/*case 'weak':
				var type1 = prompt("Please enter the Pokemon's first element", "<element goes here>");
				var type2 = prompt("Please enter the Pokemon's second element", "<leave as-is if nonexistant>");
				
				};
				if (type1 != null) {
					if (type2 != null) {
						NormalTypes = [type1.NormalTypes, type2.NormalTypes]
						ImmuneTypes = [type1.ImmuneTypes, type2.ImmuneTypes]
						HalfTypes = [type1.HalfTypes, type2.HalfTypes]
						DoubleTypes = [type1.DoubleTypes, type2.DoubleTypes]
						bot.sendMessage({
						to: channelID,
						message: "test"
						"This Pokemon is weak to: " + DoubleTypes + "!"\n
						"This Pokemon is strong against: " + HalfTypes + "!"\n
						"This Pokemon is immune to: " + ImmuneTypes + "!"\n
						"This Pokemon receives normal damage against: " + NormalTypes + "!"
					}
				}*/
				





	
	
	