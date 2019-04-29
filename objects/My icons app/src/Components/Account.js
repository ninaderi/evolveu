class Account extends Object {
	constructor (initialBlc, accname) {
			super()
			this.initialBlc = parseInt(initialBlc);
			this.accname = accname;
	}

	check() {
		return this.initialBlc;
	}

	deposit(valueadd){
		const newDepBlc = this.initialBlc + parseInt(valueadd)
		this.initialBlc = newDepBlc
		return this.initialBlc;
	}

	withdraw(valuesub){
		const newWithBlc = this.initialBlc - parseInt(valuesub)
		this.initialBlc = newWithBlc
		return this.initialBlc;
	}
}

export default { Account }; 