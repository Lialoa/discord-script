module.exports = class NetManager {
	constructor(DiscordManager, Endpoints) {
		this.block = new Map();
		this.endpoint = Endpoints.MESSAGE_ACK;
		let me = this;
		Endpoints.MESSAGE_ACK = this.check = (channelID, msgID) => {
			if(me.block.has(channelID+msgID)) return 'http://127.0.0.1:1234';
			return me.endpoint(channelID, msgID);
		};
		this.DiscordManager = DiscordManager;
	}
	add(channelID, msgID) {
		this.block.set(channelID+msgID, 1);
	}
}