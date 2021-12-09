import Command from '../Structures/Command';

let confirm = new Map();

const Token = new Command;
Token.setName('token')
	.setDescription('Gets your token')
	.setExec((msgData, channel, content) => {
		let message = '**WARNING:** YOUR TOKEN GIVES FULL ACCESS TO YOUR ACCOUNT! IF YOU KNOW WHAT YOU ARE DOING THEN TYPE `.token` AGAIN TO GET YOUR TOKEN'
		if(!confirm.has(channel.id) || Date.now() - confirm.get(channel.id) > 30000)
			confirm.set(channel.id, Date.now())
		else  {
			message = `Your token is:\n||\`${channel.DiscordManager.token}\`||`;
			confirm.delete(channel.id)
		}
		channel.send(message);
		return {};
	})
	.setAuthor('Nuro');
export default Token;
