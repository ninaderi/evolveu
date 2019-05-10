class Account  {
	constructor (id, balance, accname) {
			
			this.balance = parseInt(balance); //parseInt makes it to a number
			this.accname = accname;
			this.id = id;
	}

	check() {
		return this.balance;
	}

	deposit(valueadd){
		const newDepBlc = this.balance + parseInt(valueadd)
		this.balance = newDepBlc
		return this.balance;
	}

	withdraw(valuesub){
		const newWithBlc = this.balance - parseInt(valuesub)
		this.balance = newWithBlc
		return this.balance;
	}
}

export default Account; 