const Command = require('./Structures/Command'),
	CommandManager = require('./Managers/CommandManager'),
	NetManager = require('./Managers/NetManager');

window.lastHook = 0;

class DiscordManager {
	constructor() {
		this.CommandManager = new CommandManager(this);
		this.MessageManager;
		let parserHandled = !1; 
		this.run((a, b, c) => {
			for (let i in c.c) {
				let e = c.c[i].exports;
				if (e?.default?.showToken) this.TokenManager = e.default;
				if (e?.default?.parsePreprocessor && !parserHandled) (parserHandled = !0, this.CommandManager.handleParser(e.default));
				if (e?.default?.prototype?.getAutocompletePrefix) this.CommandManager._handleAutoComplete(e.default);
				if (e?.default?.escape) this.CommandManager.escape = e.default.escape;
				if (e?.VERSION && !this.react) this.react = e;
				if (e?.default?.sendMessage) this.MessageManager = e.default;
				if (e?.createBotMessage) this.createBotMessage = e.createBotMessage;
				if (e?.Endpoints) this.NetManager = new NetManager(this, e.Endpoints);
			}
		});
		this.TokenManager.showToken();
		this.Command = Command;
	}
	get version() {
		return VERSION;
	}
	get token() {
		return this.TokenManager.getToken();
	}
	set token(token) {
		this.TokenManager.setToken(token);
	}
	run(hook) {
		let key = [`$hook.${window.lastHook++}`];
		(window.webpackJsonp = window.webpackJsonp || [])
		.push([
			[key], {
				[key]: hook
			},
			[key]
		]);
		return this;
	}
}
window.DiscordManager = new DiscordManager();