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
	
	if (message.content.includes('morning')) {
		message.channel.send("Ohayo! Shishou, how are you today?");
		return;
	} else if (message.content.includes('night')) {
		message.channel.send("Oyasumi, Shishou, see you tomorrow!");
		return;
	} else if (message.content.includes('tired')) {
		message.channel.send("Oyasumi, Shishou, see you tomorrow!");
		return;
	} else if (message.content.includes('sleep')) {
		message.channel.send("Oyasumi, Shishou, see you tomorrow!");
		return;
	}
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
		dl(message, serverQueue)
		return;
	} else if (message.content.startsWith(`${prefix}lp`)) {
		lp(message, serverQueue)
		return;
	} else {
		message.channel.send('Please say something I understand, Shishou...')
	} 
});

async function execute(message, serverQueue) {
	const args = message.content.split(' ');

	const voiceChannel = message.member.voiceChannel;
	if (!voiceChannel) return message.channel.send('You need to be in a voice channel if you want me to sing!');
	const permissions = voiceChannel.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send('I need the permissions to join and sing in your voice channel!');
	}

	const songInfo = await ytdl.getInfo(args);
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

function skip(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
	if (!serverQueue) return message.channel.send('There is no song that I could skip, Shishou!');
	message.channel.send("I'll sing another song...");
	serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
	message.channel.send("I'll stop singing, so don't bully me...");
	serverQueue.songs = [];
	serverQueue.connection.dispatcher.end();
}
/*
function lp(message, serverQueue) {
	if (isReady && message.content === "I'll sing for you, Shishou!")
	{
	isReady = false;
	var voiceChannel = message.member.voiceChannel;
	voiceChannel.join().then(connection =>
	{
	 const dispatcher = connection.playFile('./Audio/gab.mp3');
	 dispatcher.on("end", end => {
	   voiceChannel.leave();
	   });
	}).catch(err => console.log(err));
	isReady = true;
	}
}
*/
function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	
	/*const url = await ytdl(song.url)*/
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


	
	
	