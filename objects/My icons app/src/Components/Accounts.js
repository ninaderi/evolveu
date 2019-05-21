import Account from "./Account"


class Accounts {
	constructor() {
		//console.log("something");
		
		this.newArray = [];
		this.counter = 0;


	}

	 addAccount(balance, nameAcc) {
		 let addNewAcc = new Account (this.counter, balance, nameAcc);//here you HAVE TO type "Accounts" after "new" otherwise your test won't work. Accounts is your main class
		 this.newArray.push(addNewAcc);
		 this.counter++;
		 console.log("This is an array");
	 }

	 removeAccount(id) {
	 	 let index = 0;
        this.newArray.forEach(item => {
            if(item.id === id) {
                this.newArray.splice(index, 2)//1 tells you want to delete only 1 account
                return
            }
            index++;
        })
    }
	  

	 accountTotal() {
	 	this.act = this.newArray.reduce((acc, value) => {
	 		return parseInt(acc) + parseInt(value.balance);
	 	}, 0);
	 	console.log("Hi hi", this.act)
	 		return this.act
	 }

	 // highestAccount() {
	 // 	const arr = this.newArray
	 // 	let max = arr[0]
	 // 	arr.forEach((item) => {max=(Number(max.balance) <= Number(item.balance)) ? item : max})
	 // 	return max
	 // }
	 highestAccount(){
	 	const max = this.newArray.reduce((a, b) => {
	 		if (a.balance > b.balance){
	 			return a
	 		}
	 			return b
	 	}, 0);
	 	return `${max.accname} ${max.balance}`;
	 }

	 lowestAccount() {
		const min = this.newArray.reduce((a, b) => {
	 		if (a.balance < b.balance){
	 			return a
	 		}
	 			return b
	 	}, 0);
	 	return `${min.accname} ${min.balance}`;
	 }


	  deposit(id, amount) {
        this.newArray.forEach(item => {
            if(item.id === id) {
                item.deposit(amount);
                return //Here we are breaking the loop
            }
        })
       
    }

    	withdraw(id, amount) {
        this.newArray.forEach(item => {
            if(item.id === id) {
                item.withdraw(amount);
                return
            }
        })
    }

       rename(id, newName) {
        this.newArray.forEach(item => {
            if(item.id === id) {
                item.accname = newName
                return
            }
        })
    }
}



export default  Accounts;