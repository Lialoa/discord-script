import Command from '../Structures/Command';
import regex from '../../lib/badwords';

const bypassChars = [
	'\u200a',
	'\u200b',
	'\u200c',
	'\u200d',
	'\u200e',
	'\u200f'
];

const bypass = new Command;
bypass.setName('bypass')
	.addAlias('b')
	.setDescription('Bypasses most word filters')
	.setExec((msgData, channel, content) => {
		msgData.content = content.replace(regex, (match, p1) => {
			let pos = 1 + (Math.random() * (p1.length - 1) | 0);
			return p1.substr(0, pos) + bypassChars[Math.random() * bypassChars.length | 0] + p1.substr(pos);
		});
		return msgData;
	})
	.setAuthor('Nuro');
export default bypass;
