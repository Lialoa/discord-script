const AliasedCommand = require('./AliasedCommand');

class Command {
	constructor(options = {}) {
		(options.name ?? options.command) && (this.name = this.command = (options.name ?? options.command));
		this.description = options.description ?? 'A custom command!';
		this.run = options.run ?? (() => {});
		options.match && (this.match = options.match);
		this.aliases = [];
		this.author = null;
	}
	setName(name) {
		this.name = this.command = name
		return this;
	}
	setAuthor(author) {
		this.author = author;
	}
	setRegExp(regex) {
		this.match = regex;
		return this;
	}
	setDescription(desc) {
		this.description = desc;
		return this;
	}
	setExec(run) {
		this.run = run;
		return this;
	}
	addAlias(alias) {
		if(this.aliases.includes(alias)) return !1;
		let cmdAlias = new AliasedCommand(this, alias)
		this.aliases.push(cmdAlias);
		return this;
	}
	removeAlias(alias) {
		if(!this.aliases.includes(alias)) return !1;
		this.aliases.splice(this.aliases.indexOf(alias), 1);
		return this;
	}
}

module.exports = Command;