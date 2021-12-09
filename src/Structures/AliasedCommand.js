module.exports = class AliasedCommand {
	constructor(base, name) {
		this.base = base;
		this.command = this.name = name;
		this.isAlias = !0;
	}
	get run() {
		return this.base.run
	}
	get description() {
		return `(A) - ${this.base.description}`
	}
	get author() {
		return this.base.author;
	}
}