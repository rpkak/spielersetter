const { Client } = require("discord.js");

while(true){
	const client = new Client();

	console.log('register');

	client.on("ready", () => {
		console.log("Ready");
		//member.roles.add(member.guild.roles.cache.find(r => r.name === "[S] Spieler"));
	});

	client.on("guildMemberAdd", (member) => {
		var fName = `[S] ${member.user.username}`;
		console.log(fName)
		member.setNickname(fName);
		//member.roles.add(member.guild.roles.cache.find(r => r.name === "[S] Spieler"));
	});

	console.log('start');
	client.login(process.env.token);
	console.log('restart');
}